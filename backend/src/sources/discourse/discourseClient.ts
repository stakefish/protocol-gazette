import _ from "lodash"
import { log } from "../../logger"
import { Post, Topic } from "./types"
import { DiscoursePost, DiscourseTopic } from "./clientTypes"
import OpenAPIClientAxios, { AxiosResponse } from 'openapi-client-axios'
import { Client as DiscourseAxiosClient } from './discourseAxiosClient'
import { sleep } from "../../utils"
import { FilterCategoryConfig } from "../../config/types"


export class DiscourseClient {
  private _client: DiscourseAxiosClient
  private _baseURL: string
  private _stream: string

  constructor(baseURL: string, stream: string) {
    this._baseURL = baseURL
    this._stream = stream
  }

  async init() {
    const api = new OpenAPIClientAxios({
      definition: './src/sources/discourse/openapi.json',
      axiosConfigDefaults: {
        baseURL:this._baseURL
      }
    })
    await api.init<DiscourseAxiosClient>()
    this._client = await api.getClient<DiscourseAxiosClient>()
  }

  async *getTopicsByFilter(filterFn: (topic: DiscourseTopic) => boolean): AsyncGenerator<Topic, void, undefined> {
    let done = false
    let page = 1
    while (!done) {
      log.debug(`Fetching page ${page} of ${this._stream} discourse topics`)
      const res = await DiscourseClient.retryRateLimit(async () => {
        return this._client.listLatestTopics(({
          order: 'created',
          page: page,
          no_definitions: true
        } as any))  // api keys are unnecessary for these operations but params are required by openapi spec
      })
      const rawTopics = res.data.topic_list?.topics || []
      const topics = rawTopics.filter(filterFn).map((t) => this.transformDiscourseTopic(t))
      done = (res.data.topic_list as any).more_topics_url === undefined
      page += 1
      yield* topics
    }
  }

  async *getLatestTopicsByCategories(categories: FilterCategoryConfig[], maxPages: number = 10): AsyncGenerator<Topic, void, undefined> {
    let done = false
    let page = 1
    while (!done && page <= maxPages) {
      log.debug(`Fetching page ${page} of ${this._stream} discourse topics`)
      const res = await DiscourseClient.retryRateLimit(async () => {
        return this._client.listLatestTopics(({
          order: 'created',
          page: page,
          no_definitions: true
        } as any))  // api keys are unnecessary for these operations but params are required by openapi spec
      })
      const rawTopics = res.data.topic_list?.topics || []
      const topics = rawTopics
        .filter(t => categories.find(e => e.id === t.category_id) !== undefined)
        .map((t) => this.transformDiscourseTopic(t))
      done = (res.data.topic_list as any).more_topics_url === undefined
      page += 1
      yield* topics
    }
  }

  async *getTopicsByCategory(slug: string, id: number, maxPages: number = 10): AsyncGenerator<Topic, void, undefined> {
    let done = false
    let page = 1
    while (!done && page <= maxPages) {
      log.debug(`Fetching page ${page} of ${this._stream} > ${slug} discourse topics`)
      const res = await DiscourseClient.retryRateLimit(async () => {
        return this._client.listCategoryTopics(({
          slug,
          id,
          page: page,
          no_definitions: true,
        } as any))  // api keys are unnecessary for these operations but params are required by openapi spec
      })
      const rawTopics = res.data.topic_list?.topics || []
      const topics = rawTopics.map((t) => this.transformDiscourseTopic(t))
      // done = (res.data.topic_list as any).more_topics_url === undefined
      // console.log((res.data.topic_list as any).more_topics_url)
      page += 1
      yield* topics
    }
  }

  async getPostsForTopic(topic: Topic): Promise<Post[]> {
    const topicId = topic.id
    log.debug(`Fetching ${this._stream}>discourse forum posts for topic id ${topicId}`)
    const res = await DiscourseClient.retryRateLimit(async () => {
      return this._client.getSpecificPostsFromTopic({
        id: topicId.toString()
      } as any)  // api keys are unnecessary for these operations but params are required by openapi spec
    })
    const rawPosts = res.data.post_stream?.posts || []
    const posts = rawPosts.map((t) => this.transformDiscoursePost(t))
    return posts
  }

  private static async retryRateLimit<T>(fn: () => Promise<AxiosResponse<T>>): Promise<AxiosResponse<T>> {
    while (true) {
      try {
        return await fn()
      } catch(err: any) {
        if (err.response && err.response.status === 429) {
          let waitSeconds = 45
          if (err.response.data && err.response.data.error_type === 'rate_limit') {
            waitSeconds = err.response.data.extras.wait_seconds
          }
          log.warn(`Rate limited, sleeping ${waitSeconds}`)
          await sleep(waitSeconds * 1000)
        } else {
          throw err
        }
      }
    }
  }

  private transformDiscourseTopic(topic: DiscourseTopic): Topic {
    return {
      stream: this._stream,
      id: topic.id as number,
      title: topic.title as string,
      created_at: new Date(topic.created_at as string),
      last_posted_at: new Date(topic.last_posted_at as string),
      url: `${this._baseURL}/t/${topic.slug}/${topic.id}`,
      category_id: topic.category_id
    } as Topic
  }

  private transformDiscoursePost(post: DiscoursePost): Post {
    return {
      id: post.id as number,
      stream: this._stream,
      topic_id: post.topic_id,
      post_number: post.post_number,
      version: post.version,
      body: post.cooked,
      name: post.name as string || "",
      username: post.username as string,
      user_id: post.user_id,
      avatar_template: `${this._baseURL}${post.avatar_template}`,
      created_at: new Date(post.created_at as string),
      updated_at: new Date(post.updated_at as string),
      deleted_at: new Date(post.deleted_at as string),
      url: `${this._baseURL}/t/${post.topic_slug}/${post.topic_id}/${post.id}`
    } as Post
  }
}