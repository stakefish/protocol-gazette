import { OauthV2AccessResponse } from "@slack/web-api";
import { DatabaseClient } from "./dbClient";

export interface TokenStoreParams {
  dbClient: DatabaseClient
}

export class TokenStore {
  private _dbClient: DatabaseClient
  private _installations: Map<string, OauthV2AccessResponse>

  constructor({ dbClient }: TokenStoreParams) {
    this._dbClient = dbClient
  }

  async start() {
    this._installations = new Map((await this._dbClient.getAllInstallations()).map(i => [i.team!.id as string, i]))
  }

  async addInstallation(i: OauthV2AccessResponse) {
    await this._dbClient.addInstallation(i)
    this._installations.set(i.team!.id as string, i)
  }

  getInstallation(team_id: string) {
    return this._installations.get(team_id)
  }

  async removeInstallation(team_id: string) {
    await this._dbClient.removeInstallation(team_id)
    return this._installations.delete(team_id)
  }
}