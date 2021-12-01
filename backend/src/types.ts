import { DiscordMessage } from "./sources/discord/types"
import { DiscourseMessage } from "./sources/discourse/discourseSource"
import { TestMessage } from "./sources/test/testSource"

export type topic = string

export interface Message {
  topic: topic
  data: MessageUnion
}

export interface MessageUnion {
  type: string
  value: DiscourseMessage | DiscordMessage | TestMessage
}