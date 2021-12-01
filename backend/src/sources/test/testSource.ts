import { log } from "../../logger"
import { MessageObservableFactory } from '../../sourceManager'
import _ from "lodash"
import { share, concatMap, concatMapTo, from, interval, Observable, timer, map } from "rxjs"
import { Message } from "../../server"
import { Config, SourceConfig } from "../../config/types"

export interface TestMessage {
  message: string
}

export class TestObservableFactory implements MessageObservableFactory {
  private _name: string
  private _emitIntervalSeconds: number
  private _topic: string

  constructor(name: string, sourceConfig: SourceConfig) {
    this._name = name
    this._topic = sourceConfig.topic
    if (sourceConfig.test === undefined) {
      throw new Error('Source-specific configuration not defined')
    } 
    this._emitIntervalSeconds = sourceConfig.test.emitIntervalSeconds
  }

  build(): Observable<Message> {
    return interval(this._emitIntervalSeconds * 1000)
      .pipe(map(() => {
        return {
          topic: this._topic,
          data: {type: 'test', value: { message: "hello" } }
        }
      }))
      .pipe(share())
  }

  get name() {
    return this._name
  }
}

export async function testObservableFactoryFactory(name: string, dsc: SourceConfig): Promise<TestObservableFactory> {
  log.info(`Data source ${name}: initializing`)
  return new TestObservableFactory(name, dsc)
}