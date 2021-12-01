import { SourceConfig, DiscordConfig } from "../../config/types"
import { DiscordClient } from "./discordClient"
import { map, Observable } from 'rxjs'
import { log } from "../../logger"
import { Message } from "../../server"
import { MessageObservableFactory } from "../../sourceManager"

export class DiscordObservableFactory implements MessageObservableFactory {
  private _sourceConfig: SourceConfig
  private _discordConfig: DiscordConfig
  private _client: DiscordClient
  private _name: string
  private _topic: string

  constructor(client: DiscordClient, name: string, config: SourceConfig) {
    this._name = name
    this._sourceConfig = config
    this._client = client
    this._topic = config.topic
    if (!this._sourceConfig.discord) {
      throw new Error('Discord config missing for data source')
    }
    this._discordConfig = this._sourceConfig.discord
  }

  build(): Observable<Message> {
    return this._client.listenForChannels(this._sourceConfig.topic, [this._discordConfig.channelId])
      .pipe(map(m => {
        return {
          topic: this._topic,
            data: {
              type: 'discord',
              value: m
          }
        }
      }))
  }

  get name() {
    return this._name
  }
}

export async function discordObservableFactoryFactory(discordClient: DiscordClient, name: string, dsc: SourceConfig): Promise<DiscordObservableFactory> {
  if (dsc.type !== 'discord' || !dsc.discord) {
    throw new Error('Discord config missing for source')
  }
  log.info(`data source source ${name}: initializing`)
  return new DiscordObservableFactory(discordClient, name, dsc)
}