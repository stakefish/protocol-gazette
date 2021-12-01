import _ from 'lodash'
import config from './config'
import { DatabaseClient } from './dbClient'
import { slackClientFactory } from './slackClient'
import { AuthServer } from './authServer'
import { TokenStore } from './tokenStore'
import { Bot } from './bot'

async function main() {
  const dbClient = new DatabaseClient(config.db)
  await dbClient.start()

  const tokenStore = new TokenStore({ dbClient })
  await tokenStore.start()

  const slackClient = await slackClientFactory({
    slackConfig: config.slack,
    tokenStore
  })
  await slackClient.start()
  
  const server = new AuthServer({ port: config.server.port, tokenStore, slackClient })
  server.start()

  const bot = new Bot({ backendEndpoint: config.backendEndpoint, slackClient })
  await bot.start()
}

main()