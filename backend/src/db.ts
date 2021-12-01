import knex, { Knex } from "knex"
import _ from "lodash"
import { DBConfig } from "./config/types"
import { log } from "./logger"
import { Post, Topic } from "./sources/discourse/types"
import { ArrayDifference, diffObjects } from "./utils"

export class DatabaseClient {
  private _db: Knex

  constructor(dbConfig: DBConfig) {
    this._db = knex({
      client: "pg",
      connection: {
        host: dbConfig.host,
        port: dbConfig.port,
        user: dbConfig.user,
        password: dbConfig.password,
        database: dbConfig.database,
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: "knex_migrations",
        extension: 'ts',
        directory: './src/migrations',
      }
    })
  }

  async migrate(): Promise<any> {
    return this._db.migrate.latest()
  }

  async saveTopics(topics: Topic[]): Promise<ArrayDifference<Topic>[]> {
    let diffs = Array<ArrayDifference<Topic>>()
    for (let batch of _.chunk(topics, 100)) {
      const result = await this._db.transaction(async (trx) => {
        const existingTopics = await trx<Topic>('topics')
          .select()
          .whereIn(['stream', 'id'], batch.map((t) => [t.stream, t.id]))
        const res = diffObjects(existingTopics, batch, (t) => JSON.stringify({stream:t.stream,id:t.id}))
        await trx<Post>('topics').insert(batch).onConflict(['id', 'stream']).merge().returning('*')
        if (res.length > 0) {
          log.info(`Saved ${res.length} topics`)
        }
        return res
      })
      diffs = diffs.concat(result)
    }
    return diffs
  }

  async getTopics(): Promise<Topic[]> {
    return this._db<Topic>('topics').select('*').orderBy('last_posted_at', 'desc')
  }

  async savePosts(posts: Post[]): Promise<ArrayDifference<Post>[]> {
    let diffs = Array<ArrayDifference<Post>>()
    for await (let batch of _.chunk(posts, 100)) {
      const result = await this._db.transaction(async (trx) => {
        const existingPosts = await trx<Post>('posts')
          .select()
          .whereIn(['stream', 'id'], batch.map((p) => [p.stream, p.id]))
        const diffs = diffObjects<Post>(existingPosts, batch, (t) => JSON.stringify({stream:t.stream,id:t.id}))
        await trx<Post>('posts').insert(batch).onConflict(['id', 'stream']).merge().returning('*')
        log.info(`Saved ${diffs.length} posts`)
        return diffs
      })
      diffs = diffs.concat(result)
    }
    return diffs
  }
}
