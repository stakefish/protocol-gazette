import { ChatPostMessageResponse } from "@slack/web-api"
import { map, Observable } from "rxjs"
import { webSocket } from "rxjs/webSocket"
import { log } from "./logger"
import { SlackClient } from "./slackClient"
import { Message, NotificationImage } from "./types"

const URL_REGEX = /https?:\/\/[^\s]*/g;


interface BotConfig {
  slackClient: SlackClient
  backendEndpoint: string
}

export class Bot {
  private _slackClient: SlackClient
  private _backendEndpoint: string
  private _stream: Observable<any>

  constructor({ backendEndpoint, slackClient }: BotConfig) {
    this._slackClient = slackClient
    this._backendEndpoint = backendEndpoint
  }

  async start() {
    this._stream = webSocket(this._backendEndpoint)
    this._stream.pipe(map(m => this._toNotification(m))).subscribe(message => this.onMessage(message))
  }

  async stop() {

  }

  _toNotification(m: Message): Notification {
    switch (m.data.type) {
      case "discord":
        console.log('discord')
        break
      case "discourse":
        console.log('discourse')
      case "test":
        console.log('test')
        break
    }
  }

  async onMessage(message: Notification): Promise<Notification | undefined> {
    try {
      // const res = await this.postMessage({ 
      //   channel: channelId,
      //   title: n.title,
      //   body: n.body,
      //   unfurl_links: n.unfurl_links !== undefined ? n.unfurl_links : true
      // })
    // channel: string,
    // title: string,
    // body: string,
    // image?: NotificationImage,
    // thread_ts?: string | undefined,
    // unfurl_links?: boolean,
      // const res = this._slackClient.postMessage({
      //   channel: notification.channel,
      //   text: notification.title,
      //   blocks: [
      //     Bot.buildBlock(notification)
      //   ],
      //   thread_ts: notification.thread_ts,
      //   unfurl_links: notification.unfurl_links
      // })

    } catch (err) {
      log.error('Error notifying slack: ', err)
    }
  }

  private static buildBlock({ body, image }: { body: string, image?: NotificationImage }) {
    const result: any = {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": body,
        "verbatim": true
      },
    }
    if (image) {
      result.accessory = {
        type: 'image',
        image_url: image.image_url,
        alt_text: image.alt_text
      }
    }
    return result
  }
  
  public static slackEscape(message: string) {
    let result = message
    result = result.replace('&', '&amp')
    result = result.replace('<', '&lt')
    result = result.replace('>', '&gt')
    result = result.replace(URL_REGEX, '<$&|$&>')
    return result
  }
}