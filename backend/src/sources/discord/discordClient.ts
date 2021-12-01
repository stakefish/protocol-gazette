import { Client, Intents, Message as DiscordNativeMessage } from 'discord.js'
import { Observable, fromEvent, filter, map, share } from 'rxjs'
import { DiscordMessage } from './types'

export class DiscordClient {
  private _token: string
  private _client: Client
  private _observable: Observable<DiscordNativeMessage>

  constructor(token: string) {
    this._token = token
    this._client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
    this._observable = fromEvent<DiscordNativeMessage>(this._client, 'messageCreate').pipe(share())
  }

  async init() {
    await this._client.login(this._token)
  }

  listenForChannels(stream: string, channels: string[]): Observable<DiscordMessage> {
    return this._observable
      .pipe(filter((m) => {
        return channels.includes(m.channelId)
      }))
      .pipe(map((m) => this.mapInternal(stream, m)))
      .pipe(share())
  }

  private mapInternal(stream: string, message: DiscordNativeMessage): DiscordMessage {
    return {
      stream: stream,
      channelId: message.channelId,
      id: message.id,
      content: message.content,
      url: message.url,
    } as DiscordMessage
  }
}