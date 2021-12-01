import { DiscourseClient } from "./discourseClient"
import { Config, SourceConfig, DiscourseConfig } from "../../config/types"
import { log } from "../../logger"
import { Post, Topic } from "./types"
import { ArrayDifference, collect } from "../../utils"
import { DatabaseClient } from "../../db"
import { MessageObservableFactory } from '../../sourceManager'
import _ from "lodash"
import { share, concatMap, concatMapTo, from, interval, Observable, timer } from "rxjs"
import { subDays } from 'date-fns'
import { Message } from "../../types"


interface TopicArtifact {
  topicDiff: ArrayDifference<Topic>
  postDiffs: ArrayDifference<Post>[]
}

export interface DiscourseMessage {
  topic: Topic
  post: Post
}

export class DisourseObservableFactory implements MessageObservableFactory {
  private _name: string
  private _discourseConfig: DiscourseConfig
  private _client: DiscourseClient
  private _db: DatabaseClient
  private _pullIntervalSeconds: number
  private _topic: string

  constructor(db: DatabaseClient, client: DiscourseClient, name: string, sourceConfig: SourceConfig, pullIntervalSeconds: number) {
    this._db = db
    this._client = client
    this._name = name
    this._topic = sourceConfig.topic
    if (sourceConfig.discourse === undefined) {
      throw new Error('Undefined discourse configuration')
    } else {
      this._discourseConfig = sourceConfig.discourse
    }
    this._pullIntervalSeconds = pullIntervalSeconds
  }

  build(): Observable<Message> {
    return timer(Math.random() * this._pullIntervalSeconds * 1000)
      .pipe(concatMapTo(interval(this._pullIntervalSeconds * 1000)))
      .pipe(concatMap(() => from(this.sync())))
      .pipe(concatMap(o => from(o)))
      .pipe(share())
  }

  get name() {
    return this._name
  }

  async sync(): Promise<Message[]> {
    try { 
      log.info(`Syncing ${this._name}`)
      const filterType = this._discourseConfig.filter.type
      let topics = Array<Topic>()
      if (filterType === 'categories') {
        topics = topics.concat(await collect(this._client.getLatestTopicsByCategories(this._discourseConfig.filter.categories || [])))
      } else if (filterType === 'function') {
        topics = await collect(this._client.getTopicsByFilter(this._discourseConfig.filter.function as any))
      }
      const topicDiffs = await this._db.saveTopics(topics)
      const topicArtifacts = Array<TopicArtifact>()
      for (let t of topicDiffs) {
        if (t.type === 'created' || t.type === 'updated') {
          const posts = await this._client.getPostsForTopic(t.object)
          let postDiffs = await this._db.savePosts(posts)
          // Do not notify on posts that are older than one day, this prevents us spamming the channels when new discourse  
          // forums / categories are configured.
          // postDiffs = DisourseObservableFactory.filterRecentPosts(postDiffs)
          topicArtifacts.push({
            topicDiff: t,
            postDiffs: postDiffs
          })
        }
      }
      return this.toMessage(topicArtifacts)
    } catch (err) {
      log.error(`Error syncing ${this.name}:`, err)
      return []
    }
  }

  static filterRecentPosts(postDiffs: ArrayDifference<Post>[]): ArrayDifference<Post>[] {
    return postDiffs.filter(pd => pd.object.updated_at > subDays(new Date(), 1))
  }

  private toMessage(topicArtifacts: TopicArtifact[]): Message[] {
    const result = new Array<Message>()
    for (let ta of topicArtifacts) {
      const t = ta.topicDiff.object
      for (let p of ta.postDiffs) {
        result.push({
          topic: this._topic,
            data: {
              type: 'discourse',
              value: {
                topic: t,
                post: p.object
              }
          }
        })
      }
    }
    return result
  }
}

export async function discourseObservableFactoryFactory(db: DatabaseClient, config: Config, name: string, dsc: SourceConfig): Promise<DisourseObservableFactory> {
  if (dsc.type !== 'discourse' || !dsc.discourse) {
    throw new Error('Discourse config missing for source')
  }
  log.info(`Data source ${name}: initializing`)
  const discourseConfig = dsc.discourse as DiscourseConfig
  const discourseClient = new DiscourseClient(discourseConfig.baseUrl, dsc.topic)
  const pullIntervalSeconds = discourseConfig.pullIntervalSeconds || config.defaultPullIntervalSeconds
  await discourseClient.init()
  return new DisourseObservableFactory(db, discourseClient, name, dsc, pullIntervalSeconds)
}