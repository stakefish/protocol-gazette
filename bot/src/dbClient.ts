import { OauthV2AccessResponse } from "@slack/web-api"
import knex, { Knex } from "knex"
import _ from "lodash"
import { DBConfig } from "./config"


export interface Installation {
  team_id: string
  installation: string
}

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

  async start(): Promise<any> {
    return this._db.migrate.latest()
  }

  async addInstallation(installation: OauthV2AccessResponse) {
    await this._db<Installation>('installations').insert({
      team_id: installation.team!.id,
      installation: JSON.stringify(installation)
    }).onConflict(['team_id']).merge().returning('*')
  }

  async getInstallation(id: string): Promise<OauthV2AccessResponse | undefined> {
    const results = await this._db<Installation>('installations').where('team_id', id)
    if (results.length > 0) {
      return JSON.parse(results[0].installation)
    }
  }

  async removeInstallation(installationId: string) {
    await this._db<Installation>('installations').where('team_id', installationId).del()
  }

  async getAllInstallations(): Promise<OauthV2AccessResponse[]> {
    return (await this._db<Installation>('installations')).map(i => JSON.parse(i.installation))
  }
}
