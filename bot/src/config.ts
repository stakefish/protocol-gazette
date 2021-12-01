import { loadEnvConfig } from '@next/env'

const projectDir = process.cwd()
loadEnvConfig(projectDir)

interface Config {
  backendEndpoint: string
  db: DBConfig
  slack: SlackConfig
  server: ServerConfig
}

interface ServerConfig {
  port: number
}

export interface SlackConfig {
  clientId: string
  clientSecret: string
  signingSecret: string
  appToken: string
  redirectUri: string
  stateSecret: string
}

export interface DBConfig {
  user: string
  password: string
  database: string
  host: string
  port: number
}

export default {
  backendEndpoint: process.env.BACKEND_ENDPOINT,
  server: {
    port: Number(process.env.OAUTH_SERVER_PORT),
  },
  slack: {
    appToken: process.env.SLACK_APP_TOKEN,
    clientId: process.env.SLACK_CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    signingSecret: process.env.SIGNING_SECRET,
    stateSecret: process.env.SLACK_STATE_SECRET,
    redirectUri: process.env.SLACK_REDIRECT_URI,
  },
  db: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  },
} as Config
