export interface DiscourseTopic {
  id?: number
  title?: string
  fancy_title?: string
  slug?: string
  posts_count?: number
  reply_count?: number
  highest_post_number?: number
  image_url?: string
  created_at?: string
  last_posted_at?: string
  bumped?: boolean
  bumped_at?: string
  archetype?: string
  unseen?: boolean
  last_read_post_number?: number
  unread_posts?: number
  pinned?: boolean
  unpinned?: string | null
  visible?: boolean
  closed?: boolean
  archived?: boolean
  notification_level?: number
  bookmarked?: boolean
  liked?: boolean
  views?: number
  like_count?: number
  has_summary?: boolean
  last_poster_username?: string
  category_id?: number
  op_like_count?: number
  pinned_globally?: boolean
  featured_link?: string | null
  posters?: Array<{
      extras?: string
      description?: string
      user_id?: number
      primary_group_id?: string | null
  }>
  tags?: Array<string>
}

export interface DiscoursePost {
  id?: number
  name?: string | null
  username?: string
  avatar_template?: string
  created_at?: string
  cooked?: string
  post_number?: number
  post_type?: number
  updated_at?: string
  reply_count?: number
  reply_to_post_number?: string | null
  quote_count?: number
  incoming_link_count?: number
  reads?: number
  readers_count?: number
  score?: number
  yours?: boolean
  topic_id?: number
  topic_slug?: string
  display_username?: string | null
  primary_group_name?: string | null
  flair_name?: string | null
  flair_url?: string | null
  flair_bg_color?: string | null
  flair_color?: string | null
  version?: number
  can_edit?: boolean
  can_delete?: boolean
  can_recover?: boolean
  can_wiki?: boolean
  read?: boolean
  user_title?: string | null
  actions_summary?: Array<{
      id?: number
      can_act?: boolean
  }>
  moderator?: boolean
  admin?: boolean
  staff?: boolean
  user_id?: number
  hidden?: boolean
  trust_level?: number
  deleted_at?: string | null
  user_deleted?: boolean
  edit_reason?: string | null
  can_view_edit_history?: boolean
  wiki?: boolean
  reviewable_id?: number
  reviewable_score_count?: number
  reviewable_score_pending_count?: number
}