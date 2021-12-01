import WebSocket, { WebSocketServer } from 'ws'

import {describe, expect, test, beforeEach, afterEach} from '@jest/globals'

import { Server } from './server'

describe('server', () => {
  test('connects', (done) => {
    (async () => {
      const port = 1337
      const server = new Server(port)
      await server.start()
      const ws = new WebSocket(`ws://localhost:${port}`)
      ws.on('open', async () => {
        ws.close()
        await server.stop()
        done()
      })
    })()
  })
})