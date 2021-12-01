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