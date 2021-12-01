import express, { Express } from 'express'
import fs from 'fs'
import https, { Server as HttpsServer } from 'https'
import { log } from './logger'
import { DatabaseClient, Installation } from './dbClient'
import { SlackClient } from './slackClient'
import { TokenStore } from './tokenStore'


interface AuthServerConfig {
  port: number
  slackClient: SlackClient
  tokenStore: TokenStore
}

export class AuthServer {
  private _port: number
  private _httpsServer: HttpsServer
  private _slackClient: SlackClient
  private _tokenStore: TokenStore

  constructor({ port, slackClient, tokenStore }: AuthServerConfig) {
    this._port = port
    this._slackClient = slackClient
    this._tokenStore = tokenStore

    const privateKey  = fs.readFileSync('localhost-key.pem', 'utf8')
    const certificate = fs.readFileSync('localhost.pem', 'utf8')
    const credentials = {key: privateKey, cert: certificate}
    const app = express()
    this._httpsServer = https.createServer(credentials, app)

    app.get('/slack/oauth_redirect', (req, res) => this._auth(req, res))

    // TODO: route for uninstall
    // TODO: route for add/remove from channel slash command
  }

  async _auth(req: express.Request, res: express.Response) {
    if (req.query === undefined) {
      res.status(400).send()
      log.error('Bad auth, no query')
      return
    }
    
    if (req.query.error !== undefined || req.query.code === undefined) {
      // TODO: redirect to page showing error because approval was not granted
      res.status(400).send()
      log.error('Bad auth, not approved')
      return
    }

    // TODO: redirect back to website success page instead
    res.status(200).send()  
    const code = req.query.code as string
    const installation = await this._slackClient.access(code)
    await this._tokenStore.addInstallation(installation)
  }

  async start(): Promise<void> {
    return new Promise<void>((resolve) => {
      this._httpsServer.listen(3443, () => {
        console.log(`[server]: Server is running at https://localhost:${3443}`);
        resolve()
      })
    })
  }
}