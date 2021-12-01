import config from './config'
import { DatabaseClient } from './db'
import _ from 'lodash'
import { sourceManagerFactory } from './sourceManager'
import { DiscordClient } from './sources/discord/discordClient'
import { Server } from './server'

async function run() {
  const db = new DatabaseClient(config.db)
  await db.migrate()

  const server = new Server(config.server.port)
  await server.start()

  const discordClient = new DiscordClient(config.discordBotConfig.token)
  await discordClient.init()

  const sourceManager = await sourceManagerFactory(db, config, discordClient, server)
  sourceManager.start()
}

run()