import { DiscourseTopic } from '../sources/discourse/clientTypes'

export interface Config {
  server: ServerConfig
  db: DBConfig
  discordBotConfig: DiscordBotConfig
  defaultPullIntervalSeconds: number
  sources: { [key: string]: SourceConfig }
}

export interface Subconfig {
  sources: { [key: string]: SourceConfig }
}

export interface ServerConfig {
  port: number
}

export interface DBConfig {
  user: string
  password: string
  database: string
  host: string
  port: number
}

export interface DiscordBotConfig {
  token: string
}

export interface DiscourseConfig {
  baseUrl: string
  apiUsername?: string
  apiKey?: string
  filter: FilterConfig
  pullIntervalSeconds?: number
}

export interface DiscordConfig {
  name: string
  channelId: string
}

export type SourceType = 'discord' | 'discourse' | 'cosmosProposal' | 'test'

export interface CosmosProposalConfig {
  name: string
  // TODO: fill in with cosmos specific config
}

export interface SourceConfig {
  topic:  string
  type: SourceType
  syncEnabled: boolean
  discourse?: DiscourseConfig
  discord?: DiscordConfig
  cosmosProposal?: CosmosProposalConfig
  test?: TestSourceConfig
}

export interface TestSourceConfig {
  emitIntervalSeconds: number
}

export interface StreamConfig {
  channelId: string
  topic?: string[]
}

export interface FilterCategoryConfig {
  slug: string
  id: number
}

export interface FilterConfig {
  type: "categories" | "function"
  function?: (topic: DiscourseTopic) => boolean
  categories?: FilterCategoryConfig[]
}