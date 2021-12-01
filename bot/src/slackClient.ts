import { App } from '@slack/bolt'
import { OauthV2AccessResponse } from '@slack/web-api'
import { SlackConfig } from './config'
import { TokenStore } from './tokenStore'


interface SlackClientConfig {
  app: App
  slackConfig: SlackConfig
  tokenStore: TokenStore
}

export class SlackClient {
  private _app: App
  private _slackConfig: SlackConfig
  private _tokenStore: TokenStore

  constructor({ slackConfig, app, tokenStore }: SlackClientConfig) {
    this._app = app
    this._slackConfig = slackConfig
    this._tokenStore = tokenStore
    this._app.event('channel_joined', e => this.onChannelJoined(e))
    this._app.event('app_uninstalled', e => this.onUninstall(e))
  }

  async onChannelJoined(e: any) {
    console.log(JSON.stringify(e))
  }

  async onUninstall(e: any) {
    this._tokenStore.removeInstallation(e.team_id)
  }

  async start() {
    await this._app.start();
  }

  async stop() {
    await this._app.stop()
  }

  async access(code: string): Promise<OauthV2AccessResponse> {
    return this._app.client.oauth.v2.access({
      client_id: this._slackConfig.clientId,
      client_secret: this._slackConfig.clientSecret,
      redirect_uri: this._slackConfig.redirectUri,
      code
    })
  }

  async postMessage(m: any) {
    await this._app.client.chat.postMessage(m)
  }
}


export async function slackClientFactory(params: AppFactoryConfig) {
  return new SlackClient({ slackConfig: params.slackConfig, app: await appFactory(params), tokenStore: params.tokenStore })
}

interface AppFactoryConfig {
  slackConfig: SlackConfig
  tokenStore: TokenStore
}

async function appFactory({ slackConfig, tokenStore }: AppFactoryConfig): Promise<App> {
  const { clientId, clientSecret, signingSecret, appToken, stateSecret, redirectUri } = slackConfig
  return new App({
    clientId,
    clientSecret,
    stateSecret: stateSecret,
    scopes: ['chat:write', 'groups:read', 'channels:read'],
    signingSecret,
    appToken,
    redirectUri: redirectUri,
    socketMode: true,
    installerOptions: {
      directInstall: true,
      redirectUriPath: '/slack/oauth_redirect', 
    },
    authorize: async ({ teamId }) => {
      if (teamId === undefined) {
        throw new Error('No team id')
      }
      const installation = tokenStore.getInstallation(teamId)
      if (installation === undefined) {
        throw new Error('Installation not found')
      }
      return {
        botToken: installation.access_token,
        botUserId: installation.bot_user_id,
      }
    },
  })
}