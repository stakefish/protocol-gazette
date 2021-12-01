import _ from "lodash"
import { DatabaseClient } from "./db"
import { Config } from "./config/types"
import { DiscordClient } from "./sources/discord/discordClient"
import { merge, Observable, share } from "rxjs"
import { discordObservableFactoryFactory } from "./sources/discord/discordSource"
import { discourseObservableFactoryFactory } from "./sources/discourse/discourseSource"
import { Message, Server } from "./server"
import { testObservableFactoryFactory } from "./sources/test/testSource"


export interface MessageObservableFactory {
  build: () => Observable<Message>
}

export class SourceManager {
  _sources: Array<Observable<Message>>
  private _server: Server

  constructor(sources: Array<Observable<Message>>, server: Server) {
    this._sources = sources
    this._server = server
  }

  start() {
    this._sources.map(obs => {
      obs.subscribe((message) => this._server.broadcast(message))
    })
  }
}

export async function sourceManagerFactory(db: DatabaseClient, config: Config, discordClient: DiscordClient, server: Server): Promise<SourceManager> {
  const streamObservables = new Map<string, Observable<Message>>()
  await Promise.all(Object.entries(config.sources).map(async ([name, dsc]) => {
    let observable: Observable<Message>
    switch (dsc.type) {
      case 'discourse':
        observable = (await discourseObservableFactoryFactory(db, config, name, dsc)).build()
        break
      case 'discord':
        observable = (await discordObservableFactoryFactory(discordClient, name, dsc)).build()
        break
      case 'test':
        observable = (await testObservableFactoryFactory(name, dsc)).build()
        break
      default:
        throw new Error(`Unrecognized source name config ${dsc.type}`)
    }

    if (streamObservables.has(dsc.topic)) {
      const existingObservable = streamObservables.get(dsc.topic) as Observable<Message>
      const mergedExistingObservable = merge(existingObservable, observable)
      streamObservables.set(dsc.topic, mergedExistingObservable)
    } else {
      streamObservables.set(dsc.topic, observable)
    }
  }))

  return new SourceManager(Array.from(streamObservables.values()), server)
}