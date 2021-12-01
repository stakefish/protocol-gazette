import { Config } from './types'
import { loadEnvConfig } from '@next/env'

const projectDir = process.cwd()
loadEnvConfig(projectDir)

// import sourceConfigs from './networks'

export default {
  server: {
    port: Number(process.env.PORT),
  },
  db: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  },
  discordBotConfig: {
    token: process.env.DISCORD_TOKEN,
  },
  defaultPullIntervalSeconds: 30,
  // sources: sourceConfigs
  sources: {
    'test': {
      topic:  'test',
      type: 'test',
      syncEnabled: true,
      test: {
        emitIntervalSeconds: 10
      }
    }
  }
} as Config