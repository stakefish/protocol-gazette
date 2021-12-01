import { IncomingMessage } from 'http'
import { WebSocketServer, WebSocket, RawData } from 'ws'
import { parseURL } from 'whatwg-url'
import { parse as parseQuery } from 'query-string'
import { log } from './logger'
import { Message, topic } from './types'


export class Server {
  private _wss: WebSocketServer
  private _port: number
  private _connectionsByTopic: Map<topic, WebSocket[]>
  private _topicsByConnection: Map<WebSocket, topic[]>

  constructor(port: number) {
    this._port = port
    this._connectionsByTopic = new Map()
    this._topicsByConnection = new Map()
  }

  async start() {
    await new Promise<void>((resolve) => {
      this._wss = new WebSocketServer({ port: this._port }, () => {
        log.info(`server: started on port ${this._port}`)
        resolve()
      })
    })
    this._wss.on('connection', (ws, req) => this.onConnection(ws, req))
  }

  async stop() {
    return new Promise<void>((resolve, reject) => {
      this._wss.close((e) => {
        if (e === undefined) {
          resolve()
        } else {
          reject(e)
        }
      })
    })
  }

  onConnection(ws: WebSocket, req: IncomingMessage) {
    try {
      const topics = Server.parseTopics(req.url)
      this.subscribe(ws, topics)
    } catch (e) {
      log.error(e)
      ws.close(4000, (e as Error).message)
      return
    }
    ws.on('message', data => this.onMessage(ws, data))
    ws.on('close', () => this.onConnectionClose(ws))
  }

  onConnectionClose(ws: WebSocket) {
    this.unsubscribe(ws)
  }

  onMessage(ws: WebSocket, data: RawData) {
    console.log('received: %s', data)
  }

  subscribe(ws: WebSocket, topics: topic[]) {
    topics.forEach((topic) => {
      if (this._connectionsByTopic.has(topic)) {
        const conns = this._connectionsByTopic.get(topic)
        conns!.push(ws)
      } else {
        this._connectionsByTopic.set(topic, [ws])
      }
    })
    this._topicsByConnection.set(ws, topics)
  }

  unsubscribe(ws: WebSocket) {
    const topics = this._topicsByConnection.get(ws)
    this._topicsByConnection.delete(ws)
    topics!.forEach((f) => {
      const conns = this._connectionsByTopic.get(f) as WebSocket[]
      const index = conns.findIndex((v) => v === ws)
      conns.splice(index)
    })
  }

  async broadcast(message: Message) {
    let conns = this._connectionsByTopic.get(message.topic) || Array<WebSocket>()
    // special case for the 'all' topic
    const starConns = this._connectionsByTopic.get('all') || Array<WebSocket>()
    conns = conns.concat(starConns)
    if (conns === undefined || conns.length === 0) {
      return
    }
    await Promise.all([conns.map((ws) => {
      return new Promise<void>((resolve, reject) => {
        ws.send(JSON.stringify(message), (e) => {
          if (e !== undefined) {
            reject(e)
            return
          }
          resolve()
        })
      })
    })])
  }

  static parseTopics(url: string | undefined): topic[] {
    if (url === undefined) {
      throw new Error('no url')
    }

    const parsedUrl = parseURL(url as string, { baseURL: "http://localhost"})
    if (parsedUrl === null) {
      throw new Error('url parsing failed')
    }

    const queryString = parsedUrl.query
    if (queryString === '' || queryString === null) {
      throw new Error('no topic requested, no query string')
    }

    const query = parseQuery(queryString as string, { arrayFormat: 'comma' })
    if (query.topics === undefined || query.topics?.length === 0) {
      throw new Error('no topic requested, query string does not contains key \'topics\'')
    }
    if (Array.isArray(query.topics)) {
      return query.topics as topic[]
    } else {
      return [query.topics as string]
    }
  }
}