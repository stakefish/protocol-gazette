// TODO: These are redeclared here, ideally we would 
//       import these from the backend package.

export type topic = string

export interface DiscordMessage {
  stream: string
  channelId: string
  id: string
  content: string
  url: string
}

export interface Topic {
    id: number
    stream: string
    title: string
    url: string
    category_id: number
    created_at: Date
    last_posted_at: Date
}

export interface Post {
    id: number
    stream: string
    topic_id: number
    post_number: number
    version: number
    body: string
    name: string
    username: string
    user_id: number
    avatar_template: string
    created_at: Date
    updated_at: Date
    deleted_at?: Date
    url: string
}

export interface DiscourseMessage {
  topic: Topic
  post: Post
}

export interface TestMessage {
  message: string
}

export interface Message {
  topic: topic
  data: MessageUnion
}

export interface MessageUnion {
  type: string
  value: DiscourseMessage | DiscordMessage | TestMessage
}

export interface NotificationThread {
  group_key: string;
  channel: string;
  thread_ts: string;
}

export interface Notification {
  groupKey: string;
  title: string;
  body: string;
  image?: NotificationImage;
  live: boolean;
  permalink?: string;
  unfurl_links?: boolean;
}

export interface NotificationImage {
  image_url: string;
  alt_text: string;
}
