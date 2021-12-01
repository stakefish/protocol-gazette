import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios' 

declare namespace Paths {
    namespace AddGroupMembers {
        namespace Parameters {
            export type Id = number
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        export interface RequestBody {
            /**
             * comma separated list
             * example:
             * username1,username2
             */
            usernames?: string
        }
        namespace Responses {
            export interface $200 {
                success: string
                usernames: any[]
                emails: any[]
            }
        }
    }
    namespace AdminGetUser {
        namespace Parameters {
            export type Id = number
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        namespace Responses {
            export interface $200 {
                id: number
                username: string
                name: string | null
                avatar_template: string
                email?: string
                secondary_emails?: any[]
                active: boolean
                admin: boolean
                moderator: boolean
                last_seen_at: string | null
                last_emailed_at: string | null
                created_at: string
                last_seen_age: number | null
                last_emailed_age: number | null
                created_at_age: number | null
                trust_level: number
                manual_locked_trust_level: string | null
                flag_level: number
                title: string | null
                time_read: number
                staged: boolean
                days_visited: number
                posts_read_count: number
                topics_entered: number
                post_count: number
                associated_accounts?: any[]
                can_send_activation_email: boolean
                can_activate: boolean
                can_deactivate: boolean
                ip_address: string
                registration_ip_address: string | null
                can_grant_admin: boolean
                can_revoke_admin: boolean
                can_grant_moderation: boolean
                can_revoke_moderation: boolean
                can_impersonate: boolean
                like_count: number
                like_given_count: number
                topic_count: number
                flags_given_count: number
                flags_received_count: number
                private_topics_count: number
                can_delete_all_posts: boolean
                can_be_deleted: boolean
                can_be_anonymized: boolean
                can_be_merged: boolean
                full_suspend_reason: string | null
                silence_reason: string | null
                post_edits_count?: null | number
                primary_group_id: string | null
                badge_count: number
                warnings_received_count: number
                bounce_score: null | number
                reset_bounce_score_after: string | null
                can_view_action_logs: boolean
                can_disable_second_factor: boolean
                can_delete_sso_record: boolean
                api_key_count: number
                single_sign_on_record: string | null
                approved_by: {
                    id: number
                    username: string
                    name: string
                    avatar_template: string
                } | null
                suspended_by: string | null
                silenced_by: string | null
                penalty_counts?: {
                    silenced: number
                    suspended: number
                }
                next_penalty?: string
                tl3_requirements?: {
                    time_period: number
                    requirements_met: boolean
                    requirements_lost: boolean
                    trust_level_locked: boolean
                    on_grace_period: boolean
                    days_visited: number
                    min_days_visited: number
                    num_topics_replied_to: number
                    min_topics_replied_to: number
                    topics_viewed: number
                    min_topics_viewed: number
                    posts_read: number
                    min_posts_read: number
                    topics_viewed_all_time: number
                    min_topics_viewed_all_time: number
                    posts_read_all_time: number
                    min_posts_read_all_time: number
                    num_flagged_posts: number
                    max_flagged_posts: number
                    num_flagged_by_users: number
                    max_flagged_by_users: number
                    num_likes_given: number
                    min_likes_given: number
                    num_likes_received: number
                    min_likes_received: number
                    num_likes_received_days: number
                    min_likes_received_days: number
                    num_likes_received_users: number
                    min_likes_received_users: number
                    penalty_counts: {
                        silenced: number
                        suspended: number
                        total: number
                    }
                }
                groups: [
                    {
                        id: number
                        automatic: boolean
                        name: string
                        display_name: string
                        user_count: number
                        mentionable_level: number
                        messageable_level: number
                        visibility_level: number
                        primary_group: boolean
                        title: string | null
                        grant_trust_level: string | null
                        incoming_email: string | null
                        has_messages: boolean
                        flair_url: string | null
                        flair_bg_color: string | null
                        flair_color: string | null
                        bio_raw: string | null
                        bio_cooked: string | null
                        bio_excerpt: string | null
                        public_admission: boolean
                        public_exit: boolean
                        allow_membership_requests: boolean
                        full_name: string | null
                        default_notification_level: number
                        membership_request_template: string | null
                        members_visibility_level: number
                        can_see_members: boolean
                        can_admin_group: boolean
                        publish_read_state: boolean
                    }?,
                    ...any[]
                ]
            }
        }
    }
    namespace AdminListBadges {
        namespace Responses {
            export interface $200 {
                badges: [
                    {
                        id: number
                        name: string
                        description: string
                        grant_count: number
                        allow_title: boolean
                        multiple_grant: boolean
                        icon: string
                        image_url: string | null
                        listable: boolean
                        enabled: boolean
                        badge_grouping_id: number
                        system: boolean
                        long_description: string
                        slug: string
                        manually_grantable: boolean
                        query: string | null
                        trigger: null | number
                        target_posts: boolean
                        auto_revoke: boolean
                        show_posts: boolean
                        i18n_name: string
                        badge_type_id: number
                    }?,
                    ...any[]
                ]
                badge_types: [
                    {
                        id: number
                        name: string
                        sort_order: number
                    }?,
                    ...any[]
                ]
                badge_groupings: [
                    {
                        id: number
                        name: string
                        description: string | null
                        position: number
                        system: boolean
                    }?,
                    ...any[]
                ]
                admin_badges: {
                    protected_system_fields: any[]
                    triggers: {
                        user_change: number
                        none: number
                        post_revision: number
                        trust_level_change: number
                        post_action: number
                    }
                    badge_ids: any[]
                    badge_grouping_ids: any[]
                    badge_type_ids: any[]
                }
            }
        }
    }
    namespace AdminListUsers {
        namespace Parameters {
            export type Asc = "true"
            export type Flag = "active" | "new" | "staff" | "suspended" | "blocked" | "suspect"
            export type Order = "created" | "last_emailed" | "seen" | "username" | "email" | "trust_level" | "days_visited" | "posts_read" | "topics_viewed" | "posts" | "read_time"
            export type Page = number
            export type ShowEmails = boolean
        }
        export interface PathParameters {
            flag: Parameters.Flag
        }
        export interface QueryParameters {
            order?: Parameters.Order
            asc?: Parameters.Asc
            page?: Parameters.Page
            show_emails?: Parameters.ShowEmails
        }
        namespace Responses {
            export type $200 = [
                {
                    id: number
                    username: string
                    name: string | null
                    avatar_template: string
                    email?: string
                    secondary_emails?: any[]
                    active: boolean
                    admin: boolean
                    moderator: boolean
                    last_seen_at: string | null
                    last_emailed_at: string | null
                    created_at: string
                    last_seen_age: number | null
                    last_emailed_age: number | null
                    created_at_age: number | null
                    trust_level: number
                    manual_locked_trust_level: string | null
                    flag_level: number
                    title: string | null
                    time_read: number
                    staged: boolean
                    days_visited: number
                    posts_read_count: number
                    topics_entered: number
                    post_count: number
                },
                ...{
                    id: number
                    username: string
                    name: string | null
                    avatar_template: string
                    email?: string
                    secondary_emails?: any[]
                    active: boolean
                    admin: boolean
                    moderator: boolean
                    last_seen_at: string | null
                    last_emailed_at: string | null
                    created_at: string
                    last_seen_age: number | null
                    last_emailed_age: number | null
                    created_at_age: number | null
                    trust_level: number
                    manual_locked_trust_level: string | null
                    flag_level: number
                    title: string | null
                    time_read: number
                    staged: boolean
                    days_visited: number
                    posts_read_count: number
                    topics_entered: number
                    post_count: number
                }[]
            ]
        }
    }
    namespace AnonymizeUser {
        namespace Parameters {
            export type Id = number
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        namespace Responses {
            export interface $200 {
                success: string
                username: string
            }
        }
    }
    namespace BookmarkTopic {
        export interface HeaderParameters {
            "Api-Key": Parameters.ApiKey
            "Api-Username": Parameters.ApiUsername
        }
        namespace Parameters {
            export type ApiKey = string
            export type ApiUsername = string
            export type Id = string
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ChangePassword {
        namespace Parameters {
            export type Token = string
        }
        export interface PathParameters {
            token: Parameters.Token
        }
        export interface RequestBody {
            username: string
            password: string
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace CreateBackup {
        export interface RequestBody {
            with_uploads: boolean
        }
        namespace Responses {
            export interface $200 {
                /**
                 * example:
                 * OK
                 */
                success: string
            }
        }
    }
    namespace CreateBadge {
        export interface RequestBody {
            /**
             * The name for the new badge.
             */
            name: string
            /**
             * The ID for the badge type. 1 for Gold, 2 for Silver,
             * 3 for Bronze.
             */
            badge_type_id: number
        }
        namespace Responses {
            export interface $200 {
                badge_types: [
                    {
                        id: number
                        name: string
                        sort_order: number
                    }?,
                    ...any[]
                ]
                badge: {
                    id: number
                    name: string
                    description: string
                    grant_count: number
                    allow_title: boolean
                    multiple_grant: boolean
                    icon: string
                    image_url: string | null
                    listable: boolean
                    enabled: boolean
                    badge_grouping_id: number
                    system: boolean
                    long_description: string
                    slug: string
                    manually_grantable: boolean
                    query: string | null
                    trigger: string | null
                    target_posts: boolean
                    auto_revoke: boolean
                    show_posts: boolean
                    badge_type_id: number
                }
            }
        }
    }
    namespace CreateCategory {
        export interface RequestBody {
            name: string
            /**
             * example:
             * 49d9e9
             */
            color?: string
            /**
             * example:
             * f0fcfd
             */
            text_color?: string
        }
        namespace Responses {
            export interface $200 {
                category: {
                    id: number
                    name: string
                    color: string
                    text_color: string
                    slug: string
                    topic_count: number
                    post_count: number
                    position: number
                    description: string | null
                    description_text: string | null
                    description_excerpt: string | null
                    topic_url: string | null
                    read_restricted: boolean
                    permission: null | number
                    notification_level: number
                    can_edit: boolean
                    topic_template: string | null
                    has_children: string | null
                    sort_order: string | null
                    sort_ascending: string | null
                    show_subcategory_list: boolean
                    num_featured_topics: number
                    default_view: string | null
                    subcategory_list_style: string
                    default_top_period: string
                    default_list_filter: string
                    minimum_required_tags: number
                    navigate_to_first_post_after_read: boolean
                    custom_fields: {
                        [key: string]: any
                    }
                    min_tags_from_required_group: number
                    allowed_tags?: any[]
                    allowed_tag_groups?: any[]
                    allow_global_tags?: boolean
                    required_tag_group_name: string | null
                    read_only_banner: string | null
                    available_groups: any[]
                    auto_close_hours: string | null
                    auto_close_based_on_last_post: boolean
                    allow_unlimited_owner_edits_on_first_post: boolean
                    default_slow_mode_seconds: string | null
                    group_permissions: [
                        {
                            permission_type: number
                            group_name: string
                        }?,
                        ...any[]
                    ]
                    email_in: string | null
                    email_in_allow_strangers: boolean
                    mailinglist_mirror: boolean
                    all_topics_wiki: boolean
                    can_delete: boolean
                    allow_badges: boolean
                    topic_featured_link_allowed: boolean
                    search_priority: number
                    uploaded_logo: string | null
                    uploaded_background: string | null
                }
            }
        }
    }
    namespace CreateGroup {
        export interface RequestBody {
            group: {
                name: string
            }
        }
        namespace Responses {
            export interface $200 {
                basic_group: {
                    id: number
                    automatic?: boolean
                    name?: string
                    user_count?: number
                    mentionable_level?: number
                    messageable_level?: number
                    visibility_level?: number
                    automatic_membership_email_domains?: string | null
                    automatic_membership_retroactive?: boolean
                    primary_group?: boolean
                    title?: string | null
                    grant_trust_level?: string | null
                    incoming_email?: string | null
                    has_messages?: boolean
                    flair_url?: string | null
                    flair_bg_color?: string | null
                    flair_color?: string | null
                    bio_raw?: string | null
                    bio_cooked?: string | null
                    bio_excerpt?: string | null
                    public_admission?: boolean
                    public_exit?: boolean
                    allow_membership_requests?: boolean
                    full_name?: string | null
                    default_notification_level?: number
                    membership_request_template?: string | null
                    membership_visibility_level?: number
                    can_see_members?: boolean
                    publish_read_state?: boolean
                }
            }
        }
    }
    namespace CreateInvite {
        export interface HeaderParameters {
            "Api-Key": Parameters.ApiKey
            "Api-Username": Parameters.ApiUsername
        }
        namespace Parameters {
            export type ApiKey = string
            export type ApiUsername = string
        }
        export interface RequestBody {
            /**
             * required for email invites only
             * example:
             * not-a-user-yet@example.com
             */
            email?: string
            skip_email?: boolean
            /**
             * optional, for email invites
             */
            custom_message?: string
            /**
             * optional, for link invites
             * example:
             * 5
             */
            max_redemptions_allowed?: number
            topic_id?: number
            /**
             * optional, either this or `group_names`
             */
            group_id?: number
            /**
             * optional, either this or `group_id`
             */
            group_names?: string
            /**
             * optional, if not supplied, the invite_expiry_days site
             * setting is used
             */
            expires_at?: string
        }
        namespace Responses {
            export interface $200 {
                /**
                 * example:
                 * 42
                 */
                id?: number
                /**
                 * example:
                 * http://example.com/invites/9045fd767efe201ca60c6658bcf14158
                 */
                link?: string
                /**
                 * example:
                 * not-a-user-yet@example.com
                 */
                email?: string
                /**
                 * example:
                 * false
                 */
                emailed?: boolean
                /**
                 * example:
                 * Hello world!
                 */
                custom_message?: string | null
                /**
                 * example:
                 * []
                 */
                topics?: any[]
                /**
                 * example:
                 * []
                 */
                groups?: any[]
                /**
                 * example:
                 * 2021-01-01T12:00:00.000Z
                 */
                created_at?: string
                /**
                 * example:
                 * 2021-01-01T12:00:00.000Z
                 */
                updated_at?: string
                /**
                 * example:
                 * 2021-02-01T12:00:00.000Z
                 */
                expires_at?: string
                /**
                 * example:
                 * false
                 */
                expired?: boolean
            }
        }
    }
    namespace CreateTagGroup {
        export interface RequestBody {
            name: string
        }
        namespace Responses {
            export interface $200 {
                tag_group: {
                    id: number
                    name: string
                    tag_names: any[]
                    parent_tag_name: any[]
                    one_per_topic: boolean
                    permissions: {
                        [key: string]: any
                    }
                }
            }
        }
    }
    namespace CreateTopicPostPM {
        export interface RequestBody {
            /**
             * Required if creating a new topic or new private message.
             */
            title?: string
            raw: string
            /**
             * Required if creating a new post.
             */
            topic_id?: number
            /**
             * Optional if creating a new topic, and ignored if creating
             * a new post.
             */
            category?: number
            /**
             * Required for private message, comma separated.
             * example:
             * blake,sam
             */
            target_recipients?: string
            /**
             * Deprecated. Use target_recipients instead.
             */
            target_usernames?: string
            /**
             * Required for new private message.
             * example:
             * private_message
             */
            archetype?: string
            created_at?: string
            /**
             * Provide a URL from a remote system to associate a forum
             * topic with that URL, typically for using Discourse as a comments
             * system for an external blog.
             */
            embed_url?: string
        }
        namespace Responses {
            export interface $200 {
                id: number
                name: string | null
                username: string
                avatar_template: string
                created_at: string
                raw?: string
                cooked: string
                post_number: number
                post_type: number
                updated_at: string
                reply_count: number
                reply_to_post_number: string | null
                quote_count: number
                incoming_link_count: number
                reads: number
                readers_count: number
                score: number
                yours: boolean
                topic_id: number
                topic_slug: string
                display_username: string | null
                primary_group_name: string | null
                flair_name: string | null
                flair_url: string | null
                flair_bg_color: string | null
                flair_color: string | null
                version: number
                can_edit: boolean
                can_delete: boolean
                can_recover: boolean
                can_wiki: boolean
                user_title: string | null
                bookmarked: boolean
                actions_summary: [
                    {
                        id: number
                        can_act: boolean
                    }?,
                    ...any[]
                ]
                moderator: boolean
                admin: boolean
                staff: boolean
                user_id: number
                draft_sequence: number
                hidden: boolean
                trust_level: number
                deleted_at: string | null
                user_deleted: boolean
                edit_reason: string | null
                can_view_edit_history: boolean
                wiki: boolean
                reviewable_id: string | null
                reviewable_score_count: number
                reviewable_score_pending_count: number
            }
        }
    }
    namespace CreateTopicTimer {
        export interface HeaderParameters {
            "Api-Key": Parameters.ApiKey
            "Api-Username": Parameters.ApiUsername
        }
        namespace Parameters {
            export type ApiKey = string
            export type ApiUsername = string
            export type Id = string
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        export interface RequestBody {
            /**
             * example:
             *
             */
            time?: string
            status_type?: string
            based_on_last_post?: boolean
            category_id?: number
        }
        namespace Responses {
            export interface $200 {
                /**
                 * example:
                 * OK
                 */
                success?: string
                execute_at?: string
                duration?: string | null
                based_on_last_post?: boolean
                closed?: boolean
                category_id?: string | null
            }
        }
    }
    namespace CreateUpload {
        export interface RequestBody {
            type: "avatar" | "profile_background" | "card_background" | "custom_emoji" | "composer"
            /**
             * required if uploading an avatar
             */
            user_id?: number
            /**
             * Use this flag to return an id and url
             */
            synchronous?: boolean
            file?: string // binary
        }
        namespace Responses {
            export interface $200 {
                id: number
                url: string
                original_filename: string
                filesize: number
                width: number
                height: number
                thumbnail_width: number
                thumbnail_height: number
                extension: string
                short_url: string
                short_path: string
                retain_hours: string | null
                human_filesize: string
            }
        }
    }
    namespace CreateUser {
        export interface HeaderParameters {
            "Api-Key": Parameters.ApiKey
            "Api-Username": Parameters.ApiUsername
        }
        namespace Parameters {
            export type ApiKey = string
            export type ApiUsername = string
        }
        export interface RequestBody {
            name: string
            email: string
            password: string
            username: string
            active?: boolean
            approved?: boolean
            "user_fields[1]"?: boolean
        }
        namespace Responses {
            export interface $200 {
                success: boolean
                active: boolean
                message: string
                user_id?: number
            }
        }
    }
    namespace DeleteBadge {
        namespace Parameters {
            export type Id = number
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace DeleteGroup {
        namespace Parameters {
            export type Id = number
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        namespace Responses {
            export interface $200 {
                /**
                 * example:
                 * OK
                 */
                success: string
            }
        }
    }
    namespace DeleteUser {
        namespace Parameters {
            export type Id = number
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        export interface RequestBody {
            delete_posts?: boolean
            block_email?: boolean
            block_urls?: boolean
            block_ip?: boolean
        }
        namespace Responses {
            export interface $200 {
                deleted: boolean
            }
        }
    }
    namespace DownloadBackup {
        namespace Parameters {
            export type Filename = string
            export type Token = string
        }
        export interface PathParameters {
            filename: Parameters.Filename
        }
        export interface QueryParameters {
            token: Parameters.Token
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace GetBackups {
        namespace Responses {
            export type $200 = [
                {
                    filename: string
                    size: number
                    last_modified: string
                },
                ...{
                    filename: string
                    size: number
                    last_modified: string
                }[]
            ]
        }
    }
    namespace GetCategory {
        namespace Parameters {
            export type Id = number
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        namespace Responses {
            export interface $200 {
                category: {
                    id: number
                    name: string
                    color: string
                    text_color: string
                    slug: string
                    topic_count: number
                    post_count: number
                    position: number
                    description: string | null
                    description_text: string | null
                    description_excerpt: string | null
                    topic_url: string | null
                    read_restricted: boolean
                    permission: null | number
                    notification_level: number
                    can_edit: boolean
                    topic_template: string | null
                    has_children: string | null
                    sort_order: string | null
                    sort_ascending: string | null
                    show_subcategory_list: boolean
                    num_featured_topics: number
                    default_view: string | null
                    subcategory_list_style: string
                    default_top_period: string
                    default_list_filter: string
                    minimum_required_tags: number
                    navigate_to_first_post_after_read: boolean
                    custom_fields: {
                        [key: string]: any
                    }
                    min_tags_from_required_group: number
                    allowed_tags?: any[]
                    allowed_tag_groups?: any[]
                    allow_global_tags?: boolean
                    required_tag_group_name: string | null
                    read_only_banner: string | null
                    available_groups: any[]
                    auto_close_hours: string | null
                    auto_close_based_on_last_post: boolean
                    allow_unlimited_owner_edits_on_first_post: boolean
                    default_slow_mode_seconds: string | null
                    group_permissions: [
                        {
                            permission_type: number
                            group_name: string
                        }?,
                        ...any[]
                    ]
                    email_in: string | null
                    email_in_allow_strangers: boolean
                    mailinglist_mirror: boolean
                    all_topics_wiki: boolean
                    can_delete: boolean
                    allow_badges: boolean
                    topic_featured_link_allowed: boolean
                    search_priority: number
                    uploaded_logo: string | null
                    uploaded_background: string | null
                }
            }
        }
    }
    namespace GetGroup {
        namespace Parameters {
            export type Id = string
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        namespace Responses {
            export interface $200 {
                group: {
                    id: number
                    automatic: boolean
                    name: string
                    user_count: number
                    mentionable_level: number
                    messageable_level: number
                    visibility_level: number
                    primary_group: boolean
                    title: string | null
                    grant_trust_level: string | null
                    incoming_email: string | null
                    has_messages: boolean
                    flair_url: string | null
                    flair_bg_color: string | null
                    flair_color: string | null
                    bio_raw: string | null
                    bio_cooked: string | null
                    bio_excerpt: string | null
                    public_admission: boolean
                    public_exit: boolean
                    allow_membership_requests: boolean
                    full_name: string | null
                    default_notification_level: number
                    membership_request_template: string | null
                    is_group_user: boolean
                    members_visibility_level: number
                    can_see_members: boolean
                    can_admin_group: boolean
                    publish_read_state: boolean
                    is_group_owner_display: boolean
                    mentionable: boolean
                    messageable: boolean
                    automatic_membership_email_domains: string | null
                    smtp_updated_at?: string | null
                    smtp_updated_by?: {
                        [key: string]: any
                    } | null
                    smtp_enabled?: boolean
                    smtp_server: string | null
                    smtp_port: string | null
                    smtp_ssl: string | null
                    imap_enabled?: boolean
                    imap_updated_at?: string | null
                    imap_updated_by?: {
                        [key: string]: any
                    } | null
                    imap_server: string | null
                    imap_port: string | null
                    imap_ssl: string | null
                    imap_mailbox_name: string
                    imap_mailboxes: any[]
                    email_username: string | null
                    email_password: string | null
                    imap_last_error: string | null
                    imap_old_emails: string | null
                    imap_new_emails: string | null
                    message_count: number
                    allow_unknown_sender_topic_replies: boolean
                    watching_category_ids: any[]
                    tracking_category_ids: any[]
                    watching_first_post_category_ids: any[]
                    regular_category_ids: any[]
                    muted_category_ids: any[]
                    watching_tags?: any[]
                    watching_first_post_tags?: any[]
                    tracking_tags?: any[]
                    regular_tags?: any[]
                    muted_tags?: any[]
                }
                extras: {
                    visible_group_names: any[]
                }
            }
        }
    }
    namespace GetNotifications {
        namespace Responses {
            export interface $200 {
                notifications?: {
                    id?: number
                    user_id?: number
                    notification_type?: number
                    read?: boolean
                    created_at?: string
                    post_number?: string | null
                    topic_id?: null | number
                    slug?: string | null
                    data?: {
                        badge_id?: number
                        badge_name?: string
                        badge_slug?: string
                        badge_title?: boolean
                        username?: string
                    }
                }[]
                total_rows_notifications?: number
                seen_notification_id?: number
                load_more_notifications?: string
            }
        }
    }
    namespace GetPost {
        export interface HeaderParameters {
            "Api-Key": Parameters.ApiKey
            "Api-Username": Parameters.ApiUsername
        }
        namespace Parameters {
            export type ApiKey = string
            export type ApiUsername = string
            export type Id = string
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        namespace Responses {
            export interface $200 {
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
                user_title?: string | null
                raw?: string
                actions_summary?: {
                    id?: number
                    can_act?: boolean
                }[]
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
                reviewable_id?: string | null
                reviewable_score_count?: number
                reviewable_score_pending_count?: number
            }
        }
    }
    namespace GetSite {
        namespace Responses {
            export interface $200 {
                default_archetype: string
                notification_types: {
                    mentioned: number
                    replied: number
                    quoted: number
                    edited: number
                    liked: number
                    private_message: number
                    invited_to_private_message: number
                    invitee_accepted: number
                    posted: number
                    moved_post: number
                    linked: number
                    granted_badge: number
                    invited_to_topic: number
                    custom: number
                    group_mentioned: number
                    group_message_summary: number
                    watching_first_post: number
                    topic_reminder: number
                    liked_consolidated: number
                    post_approved: number
                    code_review_commit_approved: number
                    membership_request_accepted: number
                    membership_request_consolidated: number
                    bookmark_reminder: number
                    reaction: number
                    votes_released: number
                    event_reminder: number
                    event_invitation: number
                    chat_mention: number
                    chat_message?: number
                }
                post_types: {
                    regular: number
                    moderator_action: number
                    small_action: number
                    whisper: number
                }
                trust_levels: {
                    newuser: number
                    basic: number
                    member: number
                    regular: number
                    leader: number
                }
                groups: [
                    {
                        id: number
                        name: string
                        flair_url: string | null
                        flair_bg_color: string | null
                        flair_color: string | null
                    }?,
                    ...any[]
                ]
                filters: any[]
                periods: any[]
                top_menu_items: any[]
                anonymous_top_menu_items: any[]
                uncategorized_category_id: number
                user_field_max_length: number
                post_action_types: [
                    {
                        id: number
                        name_key: string
                        name: string
                        description: string
                        short_description: string
                        is_flag: boolean
                        is_custom_flag: boolean
                    }?,
                    ...any[]
                ]
                topic_flag_types: [
                    {
                        id: number
                        name_key: string
                        name: string
                        description: string
                        short_description: string
                        is_flag: boolean
                        is_custom_flag: boolean
                    }?,
                    ...any[]
                ]
                can_create_tag: boolean
                can_tag_topics: boolean
                can_tag_pms: boolean
                tags_filter_regexp: string
                top_tags: any[]
                wizard_required?: boolean
                topic_featured_link_allowed_category_ids: any[]
                user_themes: [
                    {
                        theme_id: number
                        name: string
                        default: boolean
                        color_scheme_id: null | number
                    }?,
                    ...any[]
                ]
                user_color_schemes: [
                    {
                        id: number
                        name: string
                        is_dark: boolean
                    }?,
                    ...any[]
                ]
                default_dark_color_scheme: {
                    [key: string]: any
                } | null
                censored_regexp: string | null
                custom_emoji_translation: {
                    [key: string]: any
                }
                watched_words_replace: string | null
                watched_words_link: string | null
                categories: [
                    {
                        id: number
                        name: string
                        color: string
                        text_color: string
                        slug: string
                        topic_count: number
                        post_count: number
                        position: number
                        description: string
                        description_text: string
                        description_excerpt: string
                        topic_url: string
                        read_restricted: boolean
                        permission: number
                        notification_level: number
                        topic_template: string | null
                        has_children: boolean
                        sort_order: string | null
                        sort_ascending: string | null
                        show_subcategory_list: boolean
                        num_featured_topics: number
                        default_view: string | null
                        subcategory_list_style: string
                        default_top_period: string
                        default_list_filter: string
                        minimum_required_tags: number
                        navigate_to_first_post_after_read: boolean
                        allowed_tags: any[]
                        allowed_tag_groups: any[]
                        allow_global_tags: boolean
                        min_tags_from_required_group: number
                        required_tag_group_name: string | null
                        read_only_banner: string | null
                        uploaded_logo: string | null
                        uploaded_background: string | null
                        can_edit: boolean
                    }?,
                    ...any[]
                ]
                archetypes: [
                    {
                        id: string
                        name: string
                        options: any[]
                    }?,
                    ...any[]
                ]
                user_fields: any[]
                auth_providers: any[]
            }
        }
    }
    namespace GetSpecificPostsFromTopic {
        export interface HeaderParameters {
            "Api-Key": Parameters.ApiKey
            "Api-Username": Parameters.ApiUsername
        }
        namespace Parameters {
            export type ApiKey = string
            export type ApiUsername = string
            export type Id = string
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        export interface RequestBody {
            "post_ids[]": number
        }
        namespace Responses {
            export interface $200 {
                post_stream?: {
                    posts?: {
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
                        actions_summary?: {
                            id?: number
                            can_act?: boolean
                        }[]
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
                    }[]
                }
                id?: number
            }
        }
    }
    namespace GetTag {
        namespace Parameters {
            export type Name = string
        }
        export interface PathParameters {
            name: Parameters.Name
        }
        namespace Responses {
            export interface $200 {
                users?: {
                    id?: number
                    username?: string
                    name?: string | null
                    avatar_template?: string
                }[]
                primary_groups?: any[]
                topic_list?: {
                    can_create_topic?: boolean
                    draft?: string | null
                    draft_key?: string
                    draft_sequence?: number
                    per_page?: number
                    tags?: {
                        id?: number
                        name?: string
                        topic_count?: number
                        staff?: boolean
                    }[]
                    topics?: {
                        id?: number
                        title?: string
                        fancy_title?: string
                        slug?: string
                        posts_count?: number
                        reply_count?: number
                        highest_post_number?: number
                        image_url?: string | null
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
                        tags?: any[]
                        views?: number
                        like_count?: number
                        has_summary?: boolean
                        last_poster_username?: string
                        category_id?: number
                        pinned_globally?: boolean
                        featured_link?: string | null
                        posters?: {
                            extras?: string
                            description?: string
                            user_id?: number
                            primary_group_id?: string | null
                        }[]
                    }[]
                }
            }
        }
    }
    namespace GetTagGroup {
        namespace Parameters {
            export type Id = string
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        namespace Responses {
            export interface $200 {
                tag_group?: {
                    id?: number
                    name?: string
                    tag_names?: any[]
                    parent_tag_name?: any[]
                    one_per_topic?: boolean
                    permissions?: {
                        everyone?: number
                    }
                }
            }
        }
    }
    namespace GetTopic {
        export interface HeaderParameters {
            "Api-Key": Parameters.ApiKey
            "Api-Username": Parameters.ApiUsername
        }
        namespace Parameters {
            export type ApiKey = string
            export type ApiUsername = string
            export type Id = string
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        namespace Responses {
            export interface $200 {
                post_stream?: {
                    posts?: {
                        id?: number
                        name?: string
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
                        display_username?: string
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
                        link_counts?: {
                            url?: string
                            internal?: boolean
                            reflection?: boolean
                            clicks?: number
                        }[]
                        read?: boolean
                        user_title?: string | null
                        actions_summary?: {
                            id?: number
                            can_act?: boolean
                        }[]
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
                    }[]
                    stream?: any[]
                }
                timeline_lookup?: any[]
                suggested_topics?: {
                    id?: number
                    title?: string
                    fancy_title?: string
                    slug?: string
                    posts_count?: number
                    reply_count?: number
                    highest_post_number?: number
                    image_url?: string | null
                    created_at?: string
                    last_posted_at?: string | null
                    bumped?: boolean
                    bumped_at?: string
                    archetype?: string
                    unseen?: boolean
                    last_read_post_number?: number
                    unread_posts?: number
                    pinned?: boolean
                    unpinned?: boolean
                    visible?: boolean
                    closed?: boolean
                    archived?: boolean
                    notification_level?: number
                    bookmarked?: boolean
                    liked?: boolean
                    like_count?: number
                    views?: number
                    category_id?: number
                    featured_link?: string | null
                    posters?: {
                        extras?: string | null
                        description?: string
                        user?: {
                            id?: number
                            username?: string
                            name?: string
                            avatar_template?: string
                        }
                    }[]
                }[]
                id?: number
                title?: string
                fancy_title?: string
                posts_count?: number
                created_at?: string
                views?: number
                reply_count?: number
                like_count?: number
                last_posted_at?: string | null
                visible?: boolean
                closed?: boolean
                archived?: boolean
                has_summary?: boolean
                archetype?: string
                slug?: string
                category_id?: number
                word_count?: null | number
                deleted_at?: string | null
                user_id?: number
                featured_link?: string | null
                pinned_globally?: boolean
                pinned_at?: string | null
                pinned_until?: string | null
                image_url?: string | null
                draft?: string | null
                draft_key?: string
                draft_sequence?: number
                unpinned?: string | null
                pinned?: boolean
                current_post_number?: number
                highest_post_number?: null | number
                deleted_by?: string | null
                has_deleted?: boolean
                actions_summary?: {
                    id?: number
                    count?: number
                    hidden?: boolean
                    can_act?: boolean
                }[]
                chunk_size?: number
                bookmarked?: boolean
                topic_timer?: string | null
                message_bus_last_id?: number
                participant_count?: number
                show_read_indicator?: boolean
                thumbnails?: string | null
                details?: {
                    notification_level?: number
                    can_move_posts?: boolean
                    can_edit?: boolean
                    can_delete?: boolean
                    can_remove_allowed_users?: boolean
                    can_create_post?: boolean
                    can_reply_as_new_topic?: boolean
                    can_flag_topic?: boolean
                    can_convert_topic?: boolean
                    can_review_topic?: boolean
                    can_remove_self_id?: number
                    participants?: {
                        id?: number
                        username?: string
                        name?: string
                        avatar_template?: string
                        post_count?: number
                        primary_group_name?: string | null
                        flair_name?: string | null
                        flair_url?: string | null
                        flair_color?: string | null
                        flair_bg_color?: string | null
                    }[]
                    created_by?: {
                        id?: number
                        username?: string
                        name?: string
                        avatar_template?: string
                    }
                    last_poster?: {
                        id?: number
                        username?: string
                        name?: string
                        avatar_template?: string
                    }
                }
            }
        }
    }
    namespace GetUser {
        export interface HeaderParameters {
            "Api-Key": Parameters.ApiKey
            "Api-Username": Parameters.ApiUsername
        }
        namespace Parameters {
            export type ApiKey = string
            export type ApiUsername = string
            export type Username = string
        }
        export interface PathParameters {
            username: Parameters.Username
        }
        namespace Responses {
            export interface $200 {
                user_badges: any[]
                user: {
                    id: number
                    username: string
                    name: string
                    avatar_template: string
                    last_posted_at: string | null
                    last_seen_at: string | null
                    created_at: string
                    ignored: boolean
                    muted: boolean
                    can_ignore_user: boolean
                    can_mute_user: boolean
                    can_send_private_messages: boolean
                    can_send_private_message_to_user: boolean
                    trust_level: number
                    moderator: boolean
                    admin: boolean
                    title: string | null
                    badge_count: number
                    email?: string
                    secondary_emails?: any[]
                    unconfirmed_emails?: any[]
                    associated_accounts?: any[]
                    second_factor_backup_enabled?: boolean
                    user_fields?: {
                        $1: string | null
                        $2: string | null
                    }
                    custom_fields: {
                        first_name?: string | null
                    }
                    time_read: number
                    recent_time_read: number
                    primary_group_id: string | null
                    primary_group_name: string | null
                    flair_group_id: string | null
                    flair_name: string | null
                    flair_url: string | null
                    flair_bg_color: string | null
                    flair_color: string | null
                    featured_topic: string | null
                    staged: boolean
                    can_edit: boolean
                    can_edit_username: boolean
                    can_edit_email: boolean
                    can_edit_name: boolean
                    uploaded_avatar_id: string | null
                    has_title_badges: boolean
                    pending_count: number
                    profile_view_count: number
                    second_factor_enabled: boolean
                    can_upload_profile_header: boolean
                    can_upload_user_card_background: boolean
                    post_count: number
                    can_be_deleted: boolean
                    can_delete_all_posts: boolean
                    locale: string | null
                    muted_category_ids: any[]
                    regular_category_ids: any[]
                    watched_tags: any[]
                    watching_first_post_tags: any[]
                    tracked_tags: any[]
                    muted_tags: any[]
                    tracked_category_ids: any[]
                    watched_category_ids: any[]
                    watched_first_post_category_ids: any[]
                    system_avatar_upload_id: string | null
                    system_avatar_template: string
                    muted_usernames: any[]
                    ignored_usernames: any[]
                    allowed_pm_usernames: any[]
                    mailing_list_posts_per_day: number
                    can_change_bio: boolean
                    can_change_location: boolean
                    can_change_website: boolean
                    can_change_tracking_preferences: boolean
                    user_api_keys: string | null
                    user_auth_tokens: [
                        {
                            id: number
                            client_ip: string
                            location: string
                            browser: string
                            device: string
                            os: string
                            icon: string
                            created_at: string
                            seen_at: string
                            is_active: boolean
                        }?,
                        ...any[]
                    ]
                    user_notification_schedule: {
                        enabled: boolean
                        day_0_start_time: number
                        day_0_end_time: number
                        day_1_start_time: number
                        day_1_end_time: number
                        day_2_start_time: number
                        day_2_end_time: number
                        day_3_start_time: number
                        day_3_end_time: number
                        day_4_start_time: number
                        day_4_end_time: number
                        day_5_start_time: number
                        day_5_end_time: number
                        day_6_start_time: number
                        day_6_end_time: number
                    }
                    use_logo_small_as_avatar: boolean
                    featured_user_badge_ids: any[]
                    invited_by: string | null
                    groups: [
                        {
                            id: number
                            automatic: boolean
                            name: string
                            display_name: string
                            user_count: number
                            mentionable_level: number
                            messageable_level: number
                            visibility_level: number
                            primary_group: boolean
                            title: string | null
                            grant_trust_level: string | null
                            incoming_email: string | null
                            has_messages: boolean
                            flair_url: string | null
                            flair_bg_color: string | null
                            flair_color: string | null
                            bio_raw: string | null
                            bio_cooked: string | null
                            bio_excerpt: string | null
                            public_admission: boolean
                            public_exit: boolean
                            allow_membership_requests: boolean
                            full_name: string | null
                            default_notification_level: number
                            membership_request_template: string | null
                            members_visibility_level: number
                            can_see_members: boolean
                            can_admin_group: boolean
                            publish_read_state: boolean
                        }?,
                        ...any[]
                    ]
                    group_users: [
                        {
                            group_id: number
                            user_id: number
                            notification_level: number
                            owner?: boolean
                        }?,
                        ...any[]
                    ]
                    user_option: {
                        user_id: number
                        mailing_list_mode: boolean
                        mailing_list_mode_frequency: number
                        email_digests: boolean
                        email_level: number
                        email_messages_level: number
                        external_links_in_new_tab: boolean
                        color_scheme_id: string | null
                        dark_scheme_id: string | null
                        dynamic_favicon: boolean
                        enable_quoting: boolean
                        enable_defer: boolean
                        digest_after_minutes: number
                        automatically_unpin_topics: boolean
                        auto_track_topics_after_msecs: number
                        notification_level_when_replying: number
                        new_topic_duration_minutes: number
                        email_previous_replies: number
                        email_in_reply_to: boolean
                        like_notification_frequency: number
                        include_tl0_in_digests: boolean
                        theme_ids: any[]
                        theme_key_seq: number
                        allow_private_messages: boolean
                        enable_allowed_pm_users: boolean
                        homepage_id: string | null
                        hide_profile_and_presence: boolean
                        text_size: string
                        text_size_seq: number
                        title_count_mode: string
                        timezone: string | null
                        skip_new_user_tips: boolean
                        default_calendar?: string
                    }
                }
            }
        }
    }
    namespace GetUserExternalId {
        export interface HeaderParameters {
            "Api-Key": Parameters.ApiKey
            "Api-Username": Parameters.ApiUsername
        }
        namespace Parameters {
            export type ApiKey = string
            export type ApiUsername = string
            export type ExternalId = string
        }
        export interface PathParameters {
            external_id: Parameters.ExternalId
        }
        namespace Responses {
            export interface $200 {
                user_badges: any[]
                user: {
                    id: number
                    username: string
                    name: string
                    avatar_template: string
                    last_posted_at: string | null
                    last_seen_at: string | null
                    created_at: string
                    ignored: boolean
                    muted: boolean
                    can_ignore_user: boolean
                    can_mute_user: boolean
                    can_send_private_messages: boolean
                    can_send_private_message_to_user: boolean
                    trust_level: number
                    moderator: boolean
                    admin: boolean
                    title: string | null
                    badge_count: number
                    email?: string
                    secondary_emails?: any[]
                    unconfirmed_emails?: any[]
                    associated_accounts?: any[]
                    second_factor_backup_enabled?: boolean
                    user_fields?: {
                        $1: string | null
                        $2: string | null
                    }
                    custom_fields: {
                        first_name?: string | null
                    }
                    time_read: number
                    recent_time_read: number
                    primary_group_id: string | null
                    primary_group_name: string | null
                    flair_group_id: string | null
                    flair_name: string | null
                    flair_url: string | null
                    flair_bg_color: string | null
                    flair_color: string | null
                    featured_topic: string | null
                    staged: boolean
                    can_edit: boolean
                    can_edit_username: boolean
                    can_edit_email: boolean
                    can_edit_name: boolean
                    uploaded_avatar_id: string | null
                    has_title_badges: boolean
                    pending_count: number
                    profile_view_count: number
                    second_factor_enabled: boolean
                    can_upload_profile_header: boolean
                    can_upload_user_card_background: boolean
                    post_count: number
                    can_be_deleted: boolean
                    can_delete_all_posts: boolean
                    locale: string | null
                    muted_category_ids: any[]
                    regular_category_ids: any[]
                    watched_tags: any[]
                    watching_first_post_tags: any[]
                    tracked_tags: any[]
                    muted_tags: any[]
                    tracked_category_ids: any[]
                    watched_category_ids: any[]
                    watched_first_post_category_ids: any[]
                    system_avatar_upload_id: string | null
                    system_avatar_template: string
                    muted_usernames: any[]
                    ignored_usernames: any[]
                    allowed_pm_usernames: any[]
                    mailing_list_posts_per_day: number
                    can_change_bio: boolean
                    can_change_location: boolean
                    can_change_website: boolean
                    can_change_tracking_preferences: boolean
                    user_api_keys: string | null
                    user_auth_tokens: [
                        {
                            id: number
                            client_ip: string
                            location: string
                            browser: string
                            device: string
                            os: string
                            icon: string
                            created_at: string
                            seen_at: string
                            is_active: boolean
                        }?,
                        ...any[]
                    ]
                    user_notification_schedule: {
                        enabled: boolean
                        day_0_start_time: number
                        day_0_end_time: number
                        day_1_start_time: number
                        day_1_end_time: number
                        day_2_start_time: number
                        day_2_end_time: number
                        day_3_start_time: number
                        day_3_end_time: number
                        day_4_start_time: number
                        day_4_end_time: number
                        day_5_start_time: number
                        day_5_end_time: number
                        day_6_start_time: number
                        day_6_end_time: number
                    }
                    use_logo_small_as_avatar: boolean
                    featured_user_badge_ids: any[]
                    invited_by: string | null
                    groups: [
                        {
                            id: number
                            automatic: boolean
                            name: string
                            display_name: string
                            user_count: number
                            mentionable_level: number
                            messageable_level: number
                            visibility_level: number
                            primary_group: boolean
                            title: string | null
                            grant_trust_level: string | null
                            incoming_email: string | null
                            has_messages: boolean
                            flair_url: string | null
                            flair_bg_color: string | null
                            flair_color: string | null
                            bio_raw: string | null
                            bio_cooked: string | null
                            bio_excerpt: string | null
                            public_admission: boolean
                            public_exit: boolean
                            allow_membership_requests: boolean
                            full_name: string | null
                            default_notification_level: number
                            membership_request_template: string | null
                            members_visibility_level: number
                            can_see_members: boolean
                            can_admin_group: boolean
                            publish_read_state: boolean
                        }?,
                        ...any[]
                    ]
                    group_users: [
                        {
                            group_id: number
                            user_id: number
                            notification_level: number
                            owner?: boolean
                        }?,
                        ...any[]
                    ]
                    user_option: {
                        user_id: number
                        mailing_list_mode: boolean
                        mailing_list_mode_frequency: number
                        email_digests: boolean
                        email_level: number
                        email_messages_level: number
                        external_links_in_new_tab: boolean
                        color_scheme_id: string | null
                        dark_scheme_id: string | null
                        dynamic_favicon: boolean
                        enable_quoting: boolean
                        enable_defer: boolean
                        digest_after_minutes: number
                        automatically_unpin_topics: boolean
                        auto_track_topics_after_msecs: number
                        notification_level_when_replying: number
                        new_topic_duration_minutes: number
                        email_previous_replies: number
                        email_in_reply_to: boolean
                        like_notification_frequency: number
                        include_tl0_in_digests: boolean
                        theme_ids: any[]
                        theme_key_seq: number
                        allow_private_messages: boolean
                        enable_allowed_pm_users: boolean
                        homepage_id: string | null
                        hide_profile_and_presence: boolean
                        text_size: string
                        text_size_seq: number
                        title_count_mode: string
                        timezone: string | null
                        skip_new_user_tips: boolean
                        default_calendar?: string
                    }
                }
            }
        }
    }
    namespace GetUserIdentiyProviderExternalId {
        export interface HeaderParameters {
            "Api-Key": Parameters.ApiKey
            "Api-Username": Parameters.ApiUsername
        }
        namespace Parameters {
            export type ApiKey = string
            export type ApiUsername = string
            export type ExternalId = string
            export type Provider = string
        }
        export interface PathParameters {
            provider: Parameters.Provider
            external_id: Parameters.ExternalId
        }
        namespace Responses {
            export interface $200 {
                user_badges: any[]
                user: {
                    id: number
                    username: string
                    name: string
                    avatar_template: string
                    last_posted_at: string | null
                    last_seen_at: string | null
                    created_at: string
                    ignored: boolean
                    muted: boolean
                    can_ignore_user: boolean
                    can_mute_user: boolean
                    can_send_private_messages: boolean
                    can_send_private_message_to_user: boolean
                    trust_level: number
                    moderator: boolean
                    admin: boolean
                    title: string | null
                    badge_count: number
                    email?: string
                    secondary_emails?: any[]
                    unconfirmed_emails?: any[]
                    associated_accounts?: any[]
                    second_factor_backup_enabled?: boolean
                    user_fields?: {
                        $1: string | null
                        $2: string | null
                    }
                    custom_fields: {
                        first_name?: string | null
                    }
                    time_read: number
                    recent_time_read: number
                    primary_group_id: string | null
                    primary_group_name: string | null
                    flair_group_id: string | null
                    flair_name: string | null
                    flair_url: string | null
                    flair_bg_color: string | null
                    flair_color: string | null
                    featured_topic: string | null
                    staged: boolean
                    can_edit: boolean
                    can_edit_username: boolean
                    can_edit_email: boolean
                    can_edit_name: boolean
                    uploaded_avatar_id: string | null
                    has_title_badges: boolean
                    pending_count: number
                    profile_view_count: number
                    second_factor_enabled: boolean
                    can_upload_profile_header: boolean
                    can_upload_user_card_background: boolean
                    post_count: number
                    can_be_deleted: boolean
                    can_delete_all_posts: boolean
                    locale: string | null
                    muted_category_ids: any[]
                    regular_category_ids: any[]
                    watched_tags: any[]
                    watching_first_post_tags: any[]
                    tracked_tags: any[]
                    muted_tags: any[]
                    tracked_category_ids: any[]
                    watched_category_ids: any[]
                    watched_first_post_category_ids: any[]
                    system_avatar_upload_id: string | null
                    system_avatar_template: string
                    muted_usernames: any[]
                    ignored_usernames: any[]
                    allowed_pm_usernames: any[]
                    mailing_list_posts_per_day: number
                    can_change_bio: boolean
                    can_change_location: boolean
                    can_change_website: boolean
                    can_change_tracking_preferences: boolean
                    user_api_keys: string | null
                    user_auth_tokens: [
                        {
                            id: number
                            client_ip: string
                            location: string
                            browser: string
                            device: string
                            os: string
                            icon: string
                            created_at: string
                            seen_at: string
                            is_active: boolean
                        }?,
                        ...any[]
                    ]
                    user_notification_schedule: {
                        enabled: boolean
                        day_0_start_time: number
                        day_0_end_time: number
                        day_1_start_time: number
                        day_1_end_time: number
                        day_2_start_time: number
                        day_2_end_time: number
                        day_3_start_time: number
                        day_3_end_time: number
                        day_4_start_time: number
                        day_4_end_time: number
                        day_5_start_time: number
                        day_5_end_time: number
                        day_6_start_time: number
                        day_6_end_time: number
                    }
                    use_logo_small_as_avatar: boolean
                    featured_user_badge_ids: any[]
                    invited_by: string | null
                    groups: [
                        {
                            id: number
                            automatic: boolean
                            name: string
                            display_name: string
                            user_count: number
                            mentionable_level: number
                            messageable_level: number
                            visibility_level: number
                            primary_group: boolean
                            title: string | null
                            grant_trust_level: string | null
                            incoming_email: string | null
                            has_messages: boolean
                            flair_url: string | null
                            flair_bg_color: string | null
                            flair_color: string | null
                            bio_raw: string | null
                            bio_cooked: string | null
                            bio_excerpt: string | null
                            public_admission: boolean
                            public_exit: boolean
                            allow_membership_requests: boolean
                            full_name: string | null
                            default_notification_level: number
                            membership_request_template: string | null
                            members_visibility_level: number
                            can_see_members: boolean
                            can_admin_group: boolean
                            publish_read_state: boolean
                        }?,
                        ...any[]
                    ]
                    group_users: [
                        {
                            group_id: number
                            user_id: number
                            notification_level: number
                            owner?: boolean
                        }?,
                        ...any[]
                    ]
                    user_option: {
                        user_id: number
                        mailing_list_mode: boolean
                        mailing_list_mode_frequency: number
                        email_digests: boolean
                        email_level: number
                        email_messages_level: number
                        external_links_in_new_tab: boolean
                        color_scheme_id: string | null
                        dark_scheme_id: string | null
                        dynamic_favicon: boolean
                        enable_quoting: boolean
                        enable_defer: boolean
                        digest_after_minutes: number
                        automatically_unpin_topics: boolean
                        auto_track_topics_after_msecs: number
                        notification_level_when_replying: number
                        new_topic_duration_minutes: number
                        email_previous_replies: number
                        email_in_reply_to: boolean
                        like_notification_frequency: number
                        include_tl0_in_digests: boolean
                        theme_ids: any[]
                        theme_key_seq: number
                        allow_private_messages: boolean
                        enable_allowed_pm_users: boolean
                        homepage_id: string | null
                        hide_profile_and_presence: boolean
                        text_size: string
                        text_size_seq: number
                        title_count_mode: string
                        timezone: string | null
                        skip_new_user_tips: boolean
                        default_calendar?: string
                    }
                }
            }
        }
    }
    namespace GetUserSentPrivateMessages {
        namespace Parameters {
            export type Username = string
        }
        export interface PathParameters {
            username: Parameters.Username
        }
        namespace Responses {
            export interface $200 {
                users?: {
                    id?: number
                    username?: string
                    name?: string | null
                    avatar_template?: string
                }[]
                primary_groups?: any[]
                topic_list?: {
                    can_create_topic?: boolean
                    draft?: string | null
                    draft_key?: string
                    draft_sequence?: number
                    per_page?: number
                    topics?: {
                        id?: number
                        title?: string
                        fancy_title?: string
                        slug?: string
                        posts_count?: number
                        reply_count?: number
                        highest_post_number?: number
                        image_url?: string | null
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
                        category_id?: string | null
                        pinned_globally?: boolean
                        featured_link?: string | null
                        allowed_user_count?: number
                        posters?: {
                            extras?: string
                            description?: string
                            user_id?: number
                            primary_group_id?: string | null
                        }[]
                        participants?: any[]
                    }[]
                }
            }
        }
    }
    namespace InviteToTopic {
        export interface HeaderParameters {
            "Api-Key": Parameters.ApiKey
            "Api-Username": Parameters.ApiUsername
        }
        namespace Parameters {
            export type ApiKey = string
            export type ApiUsername = string
            export type Id = string
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        export interface RequestBody {
            user?: string
            email?: string
        }
        namespace Responses {
            export interface $200 {
                user?: {
                    id?: number
                    username?: string
                    name?: string
                    avatar_template?: string
                }
            }
        }
    }
    namespace ListCategories {
        namespace Parameters {
            export type IncludeSubcategories = true
        }
        export interface QueryParameters {
            include_subcategories?: Parameters.IncludeSubcategories
        }
        namespace Responses {
            export interface $200 {
                category_list: {
                    can_create_category: boolean
                    can_create_topic: boolean
                    categories: [
                        {
                            id: number
                            name: string
                            color: string
                            text_color: string
                            slug: string
                            topic_count: number
                            post_count: number
                            position: number
                            description: string
                            description_text: string
                            description_excerpt: string
                            topic_url: string | null
                            read_restricted: boolean
                            permission: number
                            notification_level: number
                            can_edit: boolean
                            topic_template: string | null
                            has_children: boolean
                            sort_order: string | null
                            sort_ascending: string | null
                            show_subcategory_list: boolean
                            num_featured_topics: number
                            default_view: string | null
                            subcategory_list_style: string
                            default_top_period: string
                            default_list_filter: string
                            minimum_required_tags: number
                            navigate_to_first_post_after_read: boolean
                            topics_day: number
                            topics_week: number
                            topics_month: number
                            topics_year: number
                            topics_all_time: number
                            is_uncategorized: boolean
                            subcategory_ids: any[]
                            subcategory_list?: any[] | null
                            uploaded_logo: string | null
                            uploaded_background: string | null
                        }?,
                        ...any[]
                    ]
                }
            }
        }
    }
    namespace ListCategoryTopics {
        namespace Parameters {
            export type Id = number
            export type Slug = string
        }
        export interface PathParameters {
            slug: Parameters.Slug
            id: Parameters.Id
        }
        namespace Responses {
            export interface $200 {
                users?: [
                    {
                        id: number
                        username: string
                        name: string
                        avatar_template: string
                    }?,
                    ...any[]
                ]
                primary_groups?: any[]
                topic_list: {
                    can_create_topic: boolean
                    per_page: number
                    top_tags?: any[]
                    topics: [
                        {
                            id: number
                            title: string
                            fancy_title: string
                            slug: string
                            posts_count: number
                            reply_count: number
                            highest_post_number: number
                            image_url: string | null
                            created_at: string
                            last_posted_at: string
                            bumped: boolean
                            bumped_at: string
                            archetype: string
                            unseen: boolean
                            pinned: boolean
                            unpinned: string | null
                            excerpt: string
                            visible: boolean
                            closed: boolean
                            archived: boolean
                            bookmarked: string | null
                            liked: string | null
                            views: number
                            like_count: number
                            has_summary: boolean
                            last_poster_username: string
                            category_id: number
                            pinned_globally: boolean
                            featured_link: string | null
                            posters: [
                                {
                                    extras: string
                                    description: string
                                    user_id: number
                                    primary_group_id: string | null
                                }?,
                                ...any[]
                            ]
                        }?,
                        ...any[]
                    ]
                }
            }
        }
    }
    namespace ListGroupMembers {
        namespace Parameters {
            export type Id = string
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        namespace Responses {
            export interface $200 {
                members: [
                    {
                        id: number
                        username: string
                        name: string | null
                        avatar_template: string
                        title: string | null
                        last_posted_at: string
                        last_seen_at: string
                        added_at: string
                        timezone: string
                    }?,
                    ...any[]
                ]
                owners: [
                    {
                        id: number
                        username: string
                        name: string | null
                        avatar_template: string
                        title: string | null
                        last_posted_at: string
                        last_seen_at: string
                        added_at: string
                        timezone: string
                    }?,
                    ...any[]
                ]
                meta: {
                    total: number
                    limit: number
                    offset: number
                }
            }
        }
    }
    namespace ListGroups {
        namespace Responses {
            export interface $200 {
                groups: [
                    {
                        id: number
                        automatic: boolean
                        name: string
                        display_name: string
                        user_count: number
                        mentionable_level: number
                        messageable_level: number
                        visibility_level: number
                        primary_group: boolean
                        title: string | null
                        grant_trust_level: string | null
                        incoming_email: string | null
                        has_messages: boolean
                        flair_url: string | null
                        flair_bg_color: string | null
                        flair_color: string | null
                        bio_raw: string | null
                        bio_cooked: string | null
                        bio_excerpt: string | null
                        public_admission: boolean
                        public_exit: boolean
                        allow_membership_requests: boolean
                        full_name: string | null
                        default_notification_level: number
                        membership_request_template: string | null
                        is_group_user?: boolean
                        is_group_owner?: boolean
                        members_visibility_level: number
                        can_see_members: boolean
                        can_admin_group: boolean
                        publish_read_state: boolean
                    }?,
                    ...any[]
                ]
                extras: {
                    type_filters: any[]
                }
                total_rows_groups: number
                load_more_groups: string
            }
        }
    }
    namespace ListLatestTopics {
        export interface HeaderParameters {
            "Api-Key": Parameters.ApiKey
            "Api-Username": Parameters.ApiUsername
        }
        namespace Parameters {
            export type ApiKey = string
            export type ApiUsername = string
            export type Ascending = string
            export type Order = string
            export type Page = number
        }
        export interface QueryParameters {
            order?: Parameters.Order
            ascending?: Parameters.Ascending
            page?: Parameters.Page
        }
        namespace Responses {
            export interface $200 {
                users?: {
                    id?: number
                    username?: string
                    name?: string | null
                    avatar_template?: string
                }[]
                primary_groups?: any[]
                topic_list?: {
                    can_create_topic?: boolean
                    draft?: string | null
                    draft_key?: string
                    draft_sequence?: number
                    per_page?: number
                    topics?: {
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
                        posters?: {
                            extras?: string
                            description?: string
                            user_id?: number
                            primary_group_id?: string | null
                        }[]
                    }[]
                }
            }
        }
    }
    namespace ListPosts {
        export interface HeaderParameters {
            "Api-Key": Parameters.ApiKey
            "Api-Username": Parameters.ApiUsername
        }
        namespace Parameters {
            export type ApiKey = string
            export type ApiUsername = string
        }
        namespace Responses {
            export interface $200 {
                latest_posts?: {
                    id?: number
                    name?: string
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
                    topic_title?: string
                    topic_html_title?: string
                    category_id?: number
                    display_username?: string
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
                    user_title?: string | null
                    raw?: string
                    actions_summary?: {
                        id?: number
                        can_act?: boolean
                    }[]
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
                    reviewable_id?: string | null
                    reviewable_score_count?: number
                    reviewable_score_pending_count?: number
                }[]
            }
        }
    }
    namespace ListTagGroups {
        namespace Responses {
            export interface $200 {
                tag_groups?: {
                    id?: number
                    name?: string
                    tag_names?: any[]
                    parent_tag_name?: any[]
                    one_per_topic?: boolean
                    permissions?: {
                        staff?: number
                    }
                }[]
            }
        }
    }
    namespace ListTags {
        namespace Responses {
            export interface $200 {
                tags?: {
                    id?: string
                    text?: string
                    count?: number
                    pm_count?: number
                    target_tag?: string | null
                }[]
                extras?: {
                    categories?: any[]
                }
            }
        }
    }
    namespace ListTopTopics {
        export interface HeaderParameters {
            "Api-Key": Parameters.ApiKey
            "Api-Username": Parameters.ApiUsername
        }
        namespace Parameters {
            export type ApiKey = string
            export type ApiUsername = string
            export type Period = string
        }
        export interface QueryParameters {
            period?: Parameters.Period
        }
        namespace Responses {
            export interface $200 {
                users?: {
                    id?: number
                    username?: string
                    name?: string
                    avatar_template?: string
                }[]
                primary_groups?: any[]
                topic_list?: {
                    can_create_topic?: boolean
                    draft?: string | null
                    draft_key?: string
                    draft_sequence?: number
                    for_period?: string
                    per_page?: number
                    topics?: {
                        id?: number
                        title?: string
                        fancy_title?: string
                        slug?: string
                        posts_count?: number
                        reply_count?: number
                        highest_post_number?: number
                        image_url?: string | null
                        created_at?: string
                        last_posted_at?: string
                        bumped?: boolean
                        bumped_at?: string
                        archetype?: string
                        unseen?: boolean
                        last_read_post_number?: number
                        unread_posts?: number
                        pinned?: boolean
                        unpinned?: boolean
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
                        posters?: {
                            extras?: string | null
                            description?: string
                            user_id?: number
                            primary_group_id?: string | null
                        }[]
                    }[]
                }
            }
        }
    }
    namespace ListUserActions {
        namespace Parameters {
            export type Filter = string
            export type Offset = number
            export type Username = string
        }
        export interface QueryParameters {
            offset: Parameters.Offset
            username: Parameters.Username
            filter: Parameters.Filter
        }
        namespace Responses {
            export interface $200 {
                user_actions: [
                    {
                        excerpt: string
                        action_type: number
                        created_at: string
                        avatar_template: string
                        acting_avatar_template: string
                        slug: string
                        topic_id: number
                        target_user_id: number
                        target_name: string | null
                        target_username: string
                        post_number: number
                        post_id: string | null
                        username: string
                        name: string | null
                        user_id: number
                        acting_username: string
                        acting_name: string | null
                        acting_user_id: number
                        title: string
                        deleted: boolean
                        hidden: string | null
                        post_type: string | null
                        action_code: string | null
                        category_id: number
                        closed: boolean
                        archived: boolean
                    }?,
                    ...any[]
                ]
            }
        }
    }
    namespace ListUserBadges {
        namespace Parameters {
            export type Username = string
        }
        export interface PathParameters {
            username: Parameters.Username
        }
        namespace Responses {
            export interface $200 {
                badges?: [
                    {
                        id: number
                        name: string
                        description: string
                        grant_count: number
                        allow_title: boolean
                        multiple_grant: boolean
                        icon: string
                        image_url: string | null
                        listable: boolean
                        enabled: boolean
                        badge_grouping_id: number
                        system: boolean
                        slug: string
                        manually_grantable: boolean
                        badge_type_id: number
                    }?,
                    ...any[]
                ]
                badge_types?: [
                    {
                        id: number
                        name: string
                        sort_order: number
                    }?,
                    ...any[]
                ]
                granted_bies?: [
                    {
                        id: number
                        username: string
                        name: string
                        avatar_template: string
                        flair_name: string | null
                        admin: boolean
                        moderator: boolean
                        trust_level: number
                    }?,
                    ...any[]
                ]
                user_badges: [
                    {
                        id: number
                        granted_at: string
                        grouping_position: number
                        is_favorite: string | null
                        can_favorite: boolean
                        badge_id: number
                        granted_by_id: number
                    }?,
                    ...any[]
                ]
            }
        }
    }
    namespace ListUserPrivateMessages {
        namespace Parameters {
            export type Username = string
        }
        export interface PathParameters {
            username: Parameters.Username
        }
        namespace Responses {
            export interface $200 {
                users?: {
                    id?: number
                    username?: string
                    name?: string
                    avatar_template?: string
                }[]
                primary_groups?: any[]
                topic_list?: {
                    can_create_topic?: boolean
                    draft?: string | null
                    draft_key?: string
                    draft_sequence?: number
                    per_page?: number
                    topics?: {
                        id?: number
                        title?: string
                        fancy_title?: string
                        slug?: string
                        posts_count?: number
                        reply_count?: number
                        highest_post_number?: number
                        image_url?: string | null
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
                        category_id?: string | null
                        pinned_globally?: boolean
                        featured_link?: string | null
                        allowed_user_count?: number
                        posters?: {
                            extras?: string
                            description?: string
                            user_id?: number
                            primary_group_id?: string | null
                        }[]
                        participants?: {
                            extras?: string
                            description?: string | null
                            user_id?: number
                            primary_group_id?: string | null
                        }[]
                    }[]
                }
            }
        }
    }
    namespace ListUsersPublic {
        namespace Parameters {
            export type Asc = "true"
            export type Order = "likes_received" | "likes_given" | "topic_count" | "post_count" | "topics_entered" | "posts_read" | "days_visited"
            export type Page = number
            export type Period = "daily" | "weekly" | "monthly" | "quarterly" | "yearly" | "all"
        }
        export interface QueryParameters {
            period: Parameters.Period
            order: Parameters.Order
            asc?: Parameters.Asc
            page?: Parameters.Page
        }
        namespace Responses {
            export interface $200 {
                directory_items: [
                    {
                        id: number
                        likes_received: number
                        likes_given: number
                        topics_entered: number
                        topic_count: number
                        post_count: number
                        posts_read: number
                        days_visited: number
                        user: {
                            id: number
                            username: string
                            name: string | null
                            avatar_template: string
                            title: string | null
                        }
                    }?,
                    ...any[]
                ]
                meta: {
                    last_updated_at: string | null
                    total_rows_directory_items: number
                    load_more_directory_items: string
                }
            }
        }
    }
    namespace LockPost {
        export interface HeaderParameters {
            "Api-Key": Parameters.ApiKey
            "Api-Username": Parameters.ApiUsername
        }
        namespace Parameters {
            export type ApiKey = string
            export type ApiUsername = string
            export type Id = string
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        export interface RequestBody {
            locked: boolean
        }
        namespace Responses {
            export interface $200 {
                locked?: boolean
            }
        }
    }
    namespace LogOutUser {
        namespace Parameters {
            export type Id = number
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        namespace Responses {
            export interface $200 {
                /**
                 * example:
                 * OK
                 */
                success: string
            }
        }
    }
    namespace MarkNotificationsAsRead {
        export interface RequestBody {
            /**
             * (optional) Leave off to mark all notifications as
             * read
             */
            id?: number
        }
        namespace Responses {
            export interface $200 {
                success?: string
            }
        }
    }
    namespace PerformPostAction {
        export interface HeaderParameters {
            "Api-Key": Parameters.ApiKey
            "Api-Username": Parameters.ApiUsername
        }
        namespace Parameters {
            export type ApiKey = string
            export type ApiUsername = string
        }
        export interface RequestBody {
            id: number
            post_action_type_id: number
            flag_topic?: boolean
        }
        namespace Responses {
            export interface $200 {
                id?: number
                name?: string
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
                display_username?: string
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
                user_title?: string | null
                actions_summary?: {
                    id?: number
                    count?: number
                    acted?: boolean
                    can_undo?: boolean
                }[]
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
                notice?: {
                    [key: string]: any
                }
                reviewable_id?: string | null
                reviewable_score_count?: number
                reviewable_score_pending_count?: number
            }
        }
    }
    namespace RefreshGravatar {
        namespace Parameters {
            export type Username = string
        }
        export interface PathParameters {
            username: Parameters.Username
        }
        namespace Responses {
            export interface $200 {
                gravatar_upload_id: null | number
                gravatar_avatar_template: string | null
            }
        }
    }
    namespace RemoveGroupMembers {
        namespace Parameters {
            export type Id = number
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        export interface RequestBody {
            /**
             * comma separated list
             * example:
             * username1,username2
             */
            usernames?: string
        }
        namespace Responses {
            export interface $200 {
                success: string
                usernames: any[]
                skipped_usernames: any[]
            }
        }
    }
    namespace RemoveTopic {
        export interface HeaderParameters {
            "Api-Key": Parameters.ApiKey
            "Api-Username": Parameters.ApiUsername
        }
        namespace Parameters {
            export type ApiKey = string
            export type ApiUsername = string
            export type Id = string
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace Search {
        namespace Parameters {
            export type Page = number
            export type Q = string
        }
        export interface QueryParameters {
            q?: Parameters.Q
            page?: Parameters.Page
        }
        namespace Responses {
            export interface $200 {
                posts: any[]
                users: any[]
                categories: any[]
                tags: any[]
                groups: any[]
                grouped_search_result: {
                    more_posts: string | null
                    more_users: string | null
                    more_categories: string | null
                    term: string
                    search_log_id: number
                    more_full_page_results: string | null
                    can_create_topic: boolean
                    error: string | null
                    post_ids: any[]
                    user_ids: any[]
                    category_ids: any[]
                    tag_ids: any[]
                    group_ids: any[]
                }
            }
        }
    }
    namespace SendDownloadBackupEmail {
        namespace Parameters {
            export type Filename = string
        }
        export interface PathParameters {
            filename: Parameters.Filename
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace SendPasswordResetEmail {
        export interface RequestBody {
            login: string
        }
        namespace Responses {
            export interface $200 {
                success: string
                user_found: boolean
            }
        }
    }
    namespace SetNotificationLevel {
        export interface HeaderParameters {
            "Api-Key": Parameters.ApiKey
            "Api-Username": Parameters.ApiUsername
        }
        namespace Parameters {
            export type ApiKey = string
            export type ApiUsername = string
            export type Id = string
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        export interface RequestBody {
            notification_level: "0" | "1" | "2" | "3"
        }
        namespace Responses {
            export interface $200 {
                /**
                 * example:
                 * OK
                 */
                success?: string
            }
        }
    }
    namespace SuspendUser {
        namespace Parameters {
            export type Id = number
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        export interface RequestBody {
            /**
             * example:
             * 2121-02-22
             */
            suspend_until: string
            reason: string
            /**
             * Will send an email with this message when present
             */
            message?: string
            /**
             * example:
             * delete
             */
            post_action?: string
        }
        namespace Responses {
            export interface $200 {
                suspension: {
                    suspend_reason: string
                    full_suspend_reason: string
                    suspended_till: string
                    suspended_at: string
                }
            }
        }
    }
    namespace UpdateAvatar {
        namespace Parameters {
            export type Username = string
        }
        export interface PathParameters {
            username: Parameters.Username
        }
        export interface RequestBody {
            upload_id: number
            type: "uploaded" | "custom" | "gravatar" | "system"
        }
        namespace Responses {
            export interface $200 {
                /**
                 * example:
                 * OK
                 */
                success: string
            }
        }
    }
    namespace UpdateBadge {
        namespace Parameters {
            export type Id = number
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        export interface RequestBody {
            /**
             * The name for the new badge.
             */
            name: string
            /**
             * The ID for the badge type. 1 for Gold, 2 for Silver,
             * 3 for Bronze.
             */
            badge_type_id: number
        }
        namespace Responses {
            export interface $200 {
                badge_types: [
                    {
                        id: number
                        name: string
                        sort_order: number
                    }?,
                    ...any[]
                ]
                badge: {
                    id: number
                    name: string
                    description: string
                    grant_count: number
                    allow_title: boolean
                    multiple_grant: boolean
                    icon: string
                    image_url: string | null
                    listable: boolean
                    enabled: boolean
                    badge_grouping_id: number
                    system: boolean
                    long_description: string
                    slug: string
                    manually_grantable: boolean
                    query: string | null
                    trigger: string | null
                    target_posts: boolean
                    auto_revoke: boolean
                    show_posts: boolean
                    badge_type_id: number
                }
            }
        }
    }
    namespace UpdateCategory {
        namespace Parameters {
            export type Id = number
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        export interface RequestBody {
            name: string
            /**
             * example:
             * 49d9e9
             */
            color?: string
            /**
             * example:
             * f0fcfd
             */
            text_color?: string
        }
        namespace Responses {
            export interface $200 {
                success: string
                category: {
                    id: number
                    name: string
                    color: string
                    text_color: string
                    slug: string
                    topic_count: number
                    post_count: number
                    position: number
                    description: string | null
                    description_text: string | null
                    description_excerpt: string | null
                    topic_url: string | null
                    read_restricted: boolean
                    permission: string | null
                    notification_level: number
                    can_edit: boolean
                    topic_template: string | null
                    has_children: string | null
                    sort_order: string | null
                    sort_ascending: string | null
                    show_subcategory_list: boolean
                    num_featured_topics: number
                    default_view: string | null
                    subcategory_list_style: string
                    default_top_period: string
                    default_list_filter: string
                    minimum_required_tags: number
                    navigate_to_first_post_after_read: boolean
                    custom_fields: {
                        [key: string]: any
                    }
                    min_tags_from_required_group: number
                    allowed_tags?: any[]
                    allowed_tag_groups?: any[]
                    allow_global_tags?: boolean
                    required_tag_group_name: string | null
                    read_only_banner: string | null
                    available_groups: any[]
                    auto_close_hours: string | null
                    auto_close_based_on_last_post: boolean
                    allow_unlimited_owner_edits_on_first_post: boolean
                    default_slow_mode_seconds: string | null
                    group_permissions: [
                        {
                            permission_type: number
                            group_name: string
                        }?,
                        ...any[]
                    ]
                    email_in: string | null
                    email_in_allow_strangers: boolean
                    mailinglist_mirror: boolean
                    all_topics_wiki: boolean
                    can_delete: boolean
                    allow_badges: boolean
                    topic_featured_link_allowed: boolean
                    search_priority: number
                    uploaded_logo: string | null
                    uploaded_background: string | null
                }
            }
        }
    }
    namespace UpdateEmail {
        namespace Parameters {
            export type Username = string
        }
        export interface PathParameters {
            username: Parameters.Username
        }
        export interface RequestBody {
            email: string // email
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace UpdateGroup {
        namespace Parameters {
            export type Id = number
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        export interface RequestBody {
            group: {
                name: string
            }
        }
        namespace Responses {
            export interface $200 {
                /**
                 * example:
                 * OK
                 */
                success?: string
            }
        }
    }
    namespace UpdatePost {
        export interface HeaderParameters {
            "Api-Key": Parameters.ApiKey
            "Api-Username": Parameters.ApiUsername
        }
        namespace Parameters {
            export type ApiKey = string
            export type ApiUsername = string
            export type Id = string
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        export interface RequestBody {
            post?: {
                raw: string
                edit_reason?: string
            }
        }
        namespace Responses {
            export interface $200 {
                post?: {
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
                    flair_url?: string | null
                    flair_bg_color?: string | null
                    flair_color?: string | null
                    version?: number
                    can_edit?: boolean
                    can_delete?: boolean
                    can_recover?: boolean
                    can_wiki?: boolean
                    user_title?: string | null
                    actions_summary?: {
                        id?: number
                        can_act?: boolean
                    }[]
                    moderator?: boolean
                    admin?: boolean
                    staff?: boolean
                    user_id?: number
                    draft_sequence?: number
                    hidden?: boolean
                    trust_level?: number
                    deleted_at?: string | null
                    user_deleted?: boolean
                    edit_reason?: string | null
                    can_view_edit_history?: boolean
                    wiki?: boolean
                    reviewable_id?: string | null
                    reviewable_score_count?: number
                    reviewable_score_pending_count?: number
                }
            }
        }
    }
    namespace UpdateTagGroup {
        namespace Parameters {
            export type Id = string
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        export interface RequestBody {
            name?: string
        }
        namespace Responses {
            export interface $200 {
                success?: string
                tag_group?: {
                    id?: number
                    name?: string
                    tag_names?: any[]
                    parent_tag_name?: any[]
                    one_per_topic?: boolean
                    permissions?: {
                        everyone?: number
                    }
                }
            }
        }
    }
    namespace UpdateTopic {
        export interface HeaderParameters {
            "Api-Key": Parameters.ApiKey
            "Api-Username": Parameters.ApiUsername
        }
        namespace Parameters {
            export type ApiKey = string
            export type ApiUsername = string
            export type Id = string
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        export interface RequestBody {
            topic?: {
                title?: string
                category_id?: number
            }
        }
        namespace Responses {
            export interface $200 {
                basic_topic?: {
                    id?: number
                    title?: string
                    fancy_title?: string
                    slug?: string
                    posts_count?: number
                }
            }
        }
    }
    namespace UpdateTopicStatus {
        export interface HeaderParameters {
            "Api-Key": Parameters.ApiKey
            "Api-Username": Parameters.ApiUsername
        }
        namespace Parameters {
            export type ApiKey = string
            export type ApiUsername = string
            export type Id = string
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        export interface RequestBody {
            status: "closed" | "pinned" | "pinned_globally" | "archived" | "visible"
            enabled: "true" | "false"
            /**
             * Only required for `pinned` and `pinned_globally`
             * example:
             * 2030-12-31
             */
            until?: string
        }
        namespace Responses {
            export interface $200 {
                /**
                 * example:
                 * OK
                 */
                success?: string
                topic_status_update?: string | null
            }
        }
    }
    namespace UpdateTopicTimestamp {
        export interface HeaderParameters {
            "Api-Key": Parameters.ApiKey
            "Api-Username": Parameters.ApiUsername
        }
        namespace Parameters {
            export type ApiKey = string
            export type ApiUsername = string
            export type Id = string
        }
        export interface PathParameters {
            id: Parameters.Id
        }
        export interface RequestBody {
            /**
             * example:
             * 1594291380
             */
            timestamp: string
        }
        namespace Responses {
            export interface $200 {
                /**
                 * example:
                 * OK
                 */
                success?: string
            }
        }
    }
}

export interface OperationMethods {
  /**
   * getBackups - List backups
   */
  'getBackups'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetBackups.Responses.$200>
  /**
   * createBackup - Create backup
   */
  'createBackup'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateBackup.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateBackup.Responses.$200>
  /**
   * downloadBackup - Download backup
   */
  'downloadBackup'(
    parameters?: Parameters<Paths.DownloadBackup.PathParameters & Paths.DownloadBackup.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DownloadBackup.Responses.$200>
  /**
   * sendDownloadBackupEmail - Send download backup email
   */
  'sendDownloadBackupEmail'(
    parameters?: Parameters<Paths.SendDownloadBackupEmail.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SendDownloadBackupEmail.Responses.$200>
  /**
   * adminListBadges - List badges
   */
  'adminListBadges'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AdminListBadges.Responses.$200>
  /**
   * createBadge - Create badge
   */
  'createBadge'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateBadge.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateBadge.Responses.$200>
  /**
   * updateBadge - Update badge
   */
  'updateBadge'(
    parameters?: Parameters<Paths.UpdateBadge.PathParameters> | null,
    data?: Paths.UpdateBadge.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateBadge.Responses.$200>
  /**
   * deleteBadge - Delete badge
   */
  'deleteBadge'(
    parameters?: Parameters<Paths.DeleteBadge.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteBadge.Responses.$200>
  /**
   * listCategories - Retrieves a list of categories
   */
  'listCategories'(
    parameters?: Parameters<Paths.ListCategories.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListCategories.Responses.$200>
  /**
   * createCategory - Creates a category
   */
  'createCategory'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateCategory.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateCategory.Responses.$200>
  /**
   * updateCategory - Updates a category
   */
  'updateCategory'(
    parameters?: Parameters<Paths.UpdateCategory.PathParameters> | null,
    data?: Paths.UpdateCategory.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateCategory.Responses.$200>
  /**
   * listCategoryTopics - List topics
   */
  'listCategoryTopics'(
    parameters?: Parameters<Paths.ListCategoryTopics.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListCategoryTopics.Responses.$200>
  /**
   * getCategory - Show category
   */
  'getCategory'(
    parameters?: Parameters<Paths.GetCategory.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCategory.Responses.$200>
  /**
   * createGroup - Creates a group
   */
  'createGroup'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateGroup.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateGroup.Responses.$200>
  /**
   * deleteGroup - Delete a group
   */
  'deleteGroup'(
    parameters?: Parameters<Paths.DeleteGroup.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteGroup.Responses.$200>
  /**
   * getGroup - Get a group
   */
  'getGroup'(
    parameters?: Parameters<Paths.GetGroup.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetGroup.Responses.$200>
  /**
   * updateGroup - Update a group
   */
  'updateGroup'(
    parameters?: Parameters<Paths.UpdateGroup.PathParameters> | null,
    data?: Paths.UpdateGroup.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateGroup.Responses.$200>
  /**
   * listGroupMembers - List group members
   */
  'listGroupMembers'(
    parameters?: Parameters<Paths.ListGroupMembers.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListGroupMembers.Responses.$200>
  /**
   * addGroupMembers - Add group members
   */
  'addGroupMembers'(
    parameters?: Parameters<Paths.AddGroupMembers.PathParameters> | null,
    data?: Paths.AddGroupMembers.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AddGroupMembers.Responses.$200>
  /**
   * removeGroupMembers - Remove group members
   */
  'removeGroupMembers'(
    parameters?: Parameters<Paths.RemoveGroupMembers.PathParameters> | null,
    data?: Paths.RemoveGroupMembers.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.RemoveGroupMembers.Responses.$200>
  /**
   * listGroups - List groups
   */
  'listGroups'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListGroups.Responses.$200>
  /**
   * createInvite - Create an invite
   */
  'createInvite'(
    parameters?: Parameters<Paths.CreateInvite.HeaderParameters> | null,
    data?: Paths.CreateInvite.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateInvite.Responses.$200>
  /**
   * getNotifications - Get the notifications that belong to the current user
   */
  'getNotifications'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetNotifications.Responses.$200>
  /**
   * markNotificationsAsRead - Mark notifications as read
   */
  'markNotificationsAsRead'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.MarkNotificationsAsRead.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.MarkNotificationsAsRead.Responses.$200>
  /**
   * listPosts - List latest posts across topics
   */
  'listPosts'(
    parameters?: Parameters<Paths.ListPosts.HeaderParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListPosts.Responses.$200>
  /**
   * createTopicPostPM - Creates a new topic, a new post, or a private message
   */
  'createTopicPostPM'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateTopicPostPM.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateTopicPostPM.Responses.$200>
  /**
   * getPost - Retrieve a single post
   */
  'getPost'(
    parameters?: Parameters<Paths.GetPost.PathParameters & Paths.GetPost.HeaderParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPost.Responses.$200>
  /**
   * updatePost - Update a single post
   */
  'updatePost'(
    parameters?: Parameters<Paths.UpdatePost.PathParameters & Paths.UpdatePost.HeaderParameters> | null,
    data?: Paths.UpdatePost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdatePost.Responses.$200>
  /**
   * lockPost - Lock a post from being edited
   */
  'lockPost'(
    parameters?: Parameters<Paths.LockPost.PathParameters & Paths.LockPost.HeaderParameters> | null,
    data?: Paths.LockPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.LockPost.Responses.$200>
  /**
   * performPostAction - Like a post and other actions
   */
  'performPostAction'(
    parameters?: Parameters<Paths.PerformPostAction.HeaderParameters> | null,
    data?: Paths.PerformPostAction.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PerformPostAction.Responses.$200>
  /**
   * listUserPrivateMessages - Get a list of private messages for a user
   */
  'listUserPrivateMessages'(
    parameters?: Parameters<Paths.ListUserPrivateMessages.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListUserPrivateMessages.Responses.$200>
  /**
   * getUserSentPrivateMessages - Get a list of private messages sent for a user
   */
  'getUserSentPrivateMessages'(
    parameters?: Parameters<Paths.GetUserSentPrivateMessages.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetUserSentPrivateMessages.Responses.$200>
  /**
   * search - Search for a term
   */
  'search'(
    parameters?: Parameters<Paths.Search.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.Search.Responses.$200>
  /**
   * getSite - Get site info
   * 
   * Can be used to fetch all categories and subcategories
   */
  'getSite'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSite.Responses.$200>
  /**
   * listTagGroups - Get a list of tag groups
   */
  'listTagGroups'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListTagGroups.Responses.$200>
  /**
   * createTagGroup - Creates a tag group
   */
  'createTagGroup'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateTagGroup.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateTagGroup.Responses.$200>
  /**
   * getTagGroup - Get a single tag group
   */
  'getTagGroup'(
    parameters?: Parameters<Paths.GetTagGroup.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTagGroup.Responses.$200>
  /**
   * updateTagGroup - Update tag group
   */
  'updateTagGroup'(
    parameters?: Parameters<Paths.UpdateTagGroup.PathParameters> | null,
    data?: Paths.UpdateTagGroup.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateTagGroup.Responses.$200>
  /**
   * listTags - Get a list of tags
   */
  'listTags'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListTags.Responses.$200>
  /**
   * getTag - Get a specific tag
   */
  'getTag'(
    parameters?: Parameters<Paths.GetTag.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTag.Responses.$200>
  /**
   * getSpecificPostsFromTopic - Get specific posts from a topic
   */
  'getSpecificPostsFromTopic'(
    parameters?: Parameters<Paths.GetSpecificPostsFromTopic.PathParameters & Paths.GetSpecificPostsFromTopic.HeaderParameters> | null,
    data?: Paths.GetSpecificPostsFromTopic.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSpecificPostsFromTopic.Responses.$200>
  /**
   * getTopic - Get a single topic
   */
  'getTopic'(
    parameters?: Parameters<Paths.GetTopic.PathParameters & Paths.GetTopic.HeaderParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTopic.Responses.$200>
  /**
   * removeTopic - Remove a topic
   */
  'removeTopic'(
    parameters?: Parameters<Paths.RemoveTopic.PathParameters & Paths.RemoveTopic.HeaderParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.RemoveTopic.Responses.$200>
  /**
   * updateTopic - Update a topic
   */
  'updateTopic'(
    parameters?: Parameters<Paths.UpdateTopic.PathParameters & Paths.UpdateTopic.HeaderParameters> | null,
    data?: Paths.UpdateTopic.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateTopic.Responses.$200>
  /**
   * inviteToTopic - Invite to topic
   */
  'inviteToTopic'(
    parameters?: Parameters<Paths.InviteToTopic.PathParameters & Paths.InviteToTopic.HeaderParameters> | null,
    data?: Paths.InviteToTopic.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.InviteToTopic.Responses.$200>
  /**
   * bookmarkTopic - Bookmark topic
   */
  'bookmarkTopic'(
    parameters?: Parameters<Paths.BookmarkTopic.PathParameters & Paths.BookmarkTopic.HeaderParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.BookmarkTopic.Responses.$200>
  /**
   * updateTopicStatus - Update the status of a topic
   */
  'updateTopicStatus'(
    parameters?: Parameters<Paths.UpdateTopicStatus.PathParameters & Paths.UpdateTopicStatus.HeaderParameters> | null,
    data?: Paths.UpdateTopicStatus.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateTopicStatus.Responses.$200>
  /**
   * listLatestTopics - Get the latest topics
   */
  'listLatestTopics'(
    parameters?: Parameters<Paths.ListLatestTopics.QueryParameters & Paths.ListLatestTopics.HeaderParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListLatestTopics.Responses.$200>
  /**
   * listTopTopics - Get the top topics filtered by period
   */
  'listTopTopics'(
    parameters?: Parameters<Paths.ListTopTopics.QueryParameters & Paths.ListTopTopics.HeaderParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListTopTopics.Responses.$200>
  /**
   * setNotificationLevel - Set notification level
   */
  'setNotificationLevel'(
    parameters?: Parameters<Paths.SetNotificationLevel.PathParameters & Paths.SetNotificationLevel.HeaderParameters> | null,
    data?: Paths.SetNotificationLevel.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SetNotificationLevel.Responses.$200>
  /**
   * updateTopicTimestamp - Update topic timestamp
   */
  'updateTopicTimestamp'(
    parameters?: Parameters<Paths.UpdateTopicTimestamp.PathParameters & Paths.UpdateTopicTimestamp.HeaderParameters> | null,
    data?: Paths.UpdateTopicTimestamp.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateTopicTimestamp.Responses.$200>
  /**
   * createTopicTimer - Create topic timer
   */
  'createTopicTimer'(
    parameters?: Parameters<Paths.CreateTopicTimer.PathParameters & Paths.CreateTopicTimer.HeaderParameters> | null,
    data?: Paths.CreateTopicTimer.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateTopicTimer.Responses.$200>
  /**
   * createUpload - Creates an upload
   */
  'createUpload'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateUpload.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateUpload.Responses.$200>
  /**
   * listUserBadges - List badges for a user
   */
  'listUserBadges'(
    parameters?: Parameters<Paths.ListUserBadges.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListUserBadges.Responses.$200>
  /**
   * createUser - Creates a user
   */
  'createUser'(
    parameters?: Parameters<Paths.CreateUser.HeaderParameters> | null,
    data?: Paths.CreateUser.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateUser.Responses.$200>
  /**
   * getUser - Get a single user by username
   */
  'getUser'(
    parameters?: Parameters<Paths.GetUser.PathParameters & Paths.GetUser.HeaderParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetUser.Responses.$200>
  /**
   * getUserExternalId - Get a user by external_id
   */
  'getUserExternalId'(
    parameters?: Parameters<Paths.GetUserExternalId.PathParameters & Paths.GetUserExternalId.HeaderParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetUserExternalId.Responses.$200>
  /**
   * getUserIdentiyProviderExternalId - Get a user by identity provider external ID
   */
  'getUserIdentiyProviderExternalId'(
    parameters?: Parameters<Paths.GetUserIdentiyProviderExternalId.PathParameters & Paths.GetUserIdentiyProviderExternalId.HeaderParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetUserIdentiyProviderExternalId.Responses.$200>
  /**
   * updateAvatar - Update avatar
   */
  'updateAvatar'(
    parameters?: Parameters<Paths.UpdateAvatar.PathParameters> | null,
    data?: Paths.UpdateAvatar.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateAvatar.Responses.$200>
  /**
   * updateEmail - Update email
   */
  'updateEmail'(
    parameters?: Parameters<Paths.UpdateEmail.PathParameters> | null,
    data?: Paths.UpdateEmail.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateEmail.Responses.$200>
  /**
   * listUsersPublic - Get a public list of users
   */
  'listUsersPublic'(
    parameters?: Parameters<Paths.ListUsersPublic.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListUsersPublic.Responses.$200>
  /**
   * adminGetUser - Get a user by id
   */
  'adminGetUser'(
    parameters?: Parameters<Paths.AdminGetUser.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AdminGetUser.Responses.$200>
  /**
   * deleteUser - Delete a user
   */
  'deleteUser'(
    parameters?: Parameters<Paths.DeleteUser.PathParameters> | null,
    data?: Paths.DeleteUser.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteUser.Responses.$200>
  /**
   * suspendUser - Suspend a user
   */
  'suspendUser'(
    parameters?: Parameters<Paths.SuspendUser.PathParameters> | null,
    data?: Paths.SuspendUser.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SuspendUser.Responses.$200>
  /**
   * anonymizeUser - Anonymize a user
   */
  'anonymizeUser'(
    parameters?: Parameters<Paths.AnonymizeUser.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AnonymizeUser.Responses.$200>
  /**
   * logOutUser - Log a user out
   */
  'logOutUser'(
    parameters?: Parameters<Paths.LogOutUser.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.LogOutUser.Responses.$200>
  /**
   * refreshGravatar - Refresh gravatar
   */
  'refreshGravatar'(
    parameters?: Parameters<Paths.RefreshGravatar.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.RefreshGravatar.Responses.$200>
  /**
   * adminListUsers - Get a list of users
   */
  'adminListUsers'(
    parameters?: Parameters<Paths.AdminListUsers.PathParameters & Paths.AdminListUsers.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AdminListUsers.Responses.$200>
  /**
   * listUserActions - Get a list of user actions
   */
  'listUserActions'(
    parameters?: Parameters<Paths.ListUserActions.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListUserActions.Responses.$200>
  /**
   * sendPasswordResetEmail - Send password reset email
   */
  'sendPasswordResetEmail'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.SendPasswordResetEmail.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SendPasswordResetEmail.Responses.$200>
  /**
   * changePassword - Change password
   */
  'changePassword'(
    parameters?: Parameters<Paths.ChangePassword.PathParameters> | null,
    data?: Paths.ChangePassword.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ChangePassword.Responses.$200>
}

export interface PathsDictionary {
  ['/admin/backups.json']: {
    /**
     * getBackups - List backups
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetBackups.Responses.$200>
    /**
     * createBackup - Create backup
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateBackup.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateBackup.Responses.$200>
  }
  ['/admin/backups/{filename}']: {
    /**
     * sendDownloadBackupEmail - Send download backup email
     */
    'put'(
      parameters?: Parameters<Paths.SendDownloadBackupEmail.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SendDownloadBackupEmail.Responses.$200>
    /**
     * downloadBackup - Download backup
     */
    'get'(
      parameters?: Parameters<Paths.DownloadBackup.PathParameters & Paths.DownloadBackup.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DownloadBackup.Responses.$200>
  }
  ['/admin/badges.json']: {
    /**
     * adminListBadges - List badges
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AdminListBadges.Responses.$200>
    /**
     * createBadge - Create badge
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateBadge.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateBadge.Responses.$200>
  }
  ['/admin/badges/{id}.json']: {
    /**
     * updateBadge - Update badge
     */
    'put'(
      parameters?: Parameters<Paths.UpdateBadge.PathParameters> | null,
      data?: Paths.UpdateBadge.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateBadge.Responses.$200>
    /**
     * deleteBadge - Delete badge
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteBadge.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteBadge.Responses.$200>
  }
  ['/categories.json']: {
    /**
     * createCategory - Creates a category
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateCategory.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateCategory.Responses.$200>
    /**
     * listCategories - Retrieves a list of categories
     */
    'get'(
      parameters?: Parameters<Paths.ListCategories.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListCategories.Responses.$200>
  }
  ['/categories/{id}.json']: {
    /**
     * updateCategory - Updates a category
     */
    'put'(
      parameters?: Parameters<Paths.UpdateCategory.PathParameters> | null,
      data?: Paths.UpdateCategory.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateCategory.Responses.$200>
  }
  ['/c/{slug}/{id}.json']: {
    /**
     * listCategoryTopics - List topics
     */
    'get'(
      parameters?: Parameters<Paths.ListCategoryTopics.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListCategoryTopics.Responses.$200>
  }
  ['/c/{id}/show.json']: {
    /**
     * getCategory - Show category
     */
    'get'(
      parameters?: Parameters<Paths.GetCategory.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCategory.Responses.$200>
  }
  ['/admin/groups.json']: {
    /**
     * createGroup - Creates a group
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateGroup.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateGroup.Responses.$200>
  }
  ['/admin/groups/{id}.json']: {
    /**
     * deleteGroup - Delete a group
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteGroup.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteGroup.Responses.$200>
  }
  ['/groups/{id}.json']: {
    /**
     * updateGroup - Update a group
     */
    'put'(
      parameters?: Parameters<Paths.UpdateGroup.PathParameters> | null,
      data?: Paths.UpdateGroup.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateGroup.Responses.$200>
    /**
     * getGroup - Get a group
     */
    'get'(
      parameters?: Parameters<Paths.GetGroup.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetGroup.Responses.$200>
  }
  ['/groups/{id}/members.json']: {
    /**
     * listGroupMembers - List group members
     */
    'get'(
      parameters?: Parameters<Paths.ListGroupMembers.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListGroupMembers.Responses.$200>
    /**
     * addGroupMembers - Add group members
     */
    'put'(
      parameters?: Parameters<Paths.AddGroupMembers.PathParameters> | null,
      data?: Paths.AddGroupMembers.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AddGroupMembers.Responses.$200>
    /**
     * removeGroupMembers - Remove group members
     */
    'delete'(
      parameters?: Parameters<Paths.RemoveGroupMembers.PathParameters> | null,
      data?: Paths.RemoveGroupMembers.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.RemoveGroupMembers.Responses.$200>
  }
  ['/groups.json']: {
    /**
     * listGroups - List groups
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListGroups.Responses.$200>
  }
  ['/invites.json']: {
    /**
     * createInvite - Create an invite
     */
    'post'(
      parameters?: Parameters<Paths.CreateInvite.HeaderParameters> | null,
      data?: Paths.CreateInvite.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateInvite.Responses.$200>
  }
  ['/notifications.json']: {
    /**
     * getNotifications - Get the notifications that belong to the current user
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetNotifications.Responses.$200>
  }
  ['/notifications/mark-read.json']: {
    /**
     * markNotificationsAsRead - Mark notifications as read
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.MarkNotificationsAsRead.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.MarkNotificationsAsRead.Responses.$200>
  }
  ['/posts.json']: {
    /**
     * listPosts - List latest posts across topics
     */
    'get'(
      parameters?: Parameters<Paths.ListPosts.HeaderParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListPosts.Responses.$200>
    /**
     * createTopicPostPM - Creates a new topic, a new post, or a private message
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateTopicPostPM.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateTopicPostPM.Responses.$200>
  }
  ['/posts/{id}.json']: {
    /**
     * getPost - Retrieve a single post
     */
    'get'(
      parameters?: Parameters<Paths.GetPost.PathParameters & Paths.GetPost.HeaderParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPost.Responses.$200>
    /**
     * updatePost - Update a single post
     */
    'put'(
      parameters?: Parameters<Paths.UpdatePost.PathParameters & Paths.UpdatePost.HeaderParameters> | null,
      data?: Paths.UpdatePost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdatePost.Responses.$200>
  }
  ['/posts/{id}/locked.json']: {
    /**
     * lockPost - Lock a post from being edited
     */
    'put'(
      parameters?: Parameters<Paths.LockPost.PathParameters & Paths.LockPost.HeaderParameters> | null,
      data?: Paths.LockPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.LockPost.Responses.$200>
  }
  ['/post_actions.json']: {
    /**
     * performPostAction - Like a post and other actions
     */
    'post'(
      parameters?: Parameters<Paths.PerformPostAction.HeaderParameters> | null,
      data?: Paths.PerformPostAction.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PerformPostAction.Responses.$200>
  }
  ['/topics/private-messages/{username}.json']: {
    /**
     * listUserPrivateMessages - Get a list of private messages for a user
     */
    'get'(
      parameters?: Parameters<Paths.ListUserPrivateMessages.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListUserPrivateMessages.Responses.$200>
  }
  ['/topics/private-messages-sent/{username}.json']: {
    /**
     * getUserSentPrivateMessages - Get a list of private messages sent for a user
     */
    'get'(
      parameters?: Parameters<Paths.GetUserSentPrivateMessages.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetUserSentPrivateMessages.Responses.$200>
  }
  ['/search.json']: {
    /**
     * search - Search for a term
     */
    'get'(
      parameters?: Parameters<Paths.Search.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.Search.Responses.$200>
  }
  ['/site.json']: {
    /**
     * getSite - Get site info
     * 
     * Can be used to fetch all categories and subcategories
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSite.Responses.$200>
  }
  ['/tag_groups.json']: {
    /**
     * listTagGroups - Get a list of tag groups
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListTagGroups.Responses.$200>
    /**
     * createTagGroup - Creates a tag group
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateTagGroup.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateTagGroup.Responses.$200>
  }
  ['/tag_groups/{id}.json']: {
    /**
     * getTagGroup - Get a single tag group
     */
    'get'(
      parameters?: Parameters<Paths.GetTagGroup.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTagGroup.Responses.$200>
    /**
     * updateTagGroup - Update tag group
     */
    'put'(
      parameters?: Parameters<Paths.UpdateTagGroup.PathParameters> | null,
      data?: Paths.UpdateTagGroup.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateTagGroup.Responses.$200>
  }
  ['/tags.json']: {
    /**
     * listTags - Get a list of tags
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListTags.Responses.$200>
  }
  ['/tag/{name}.json']: {
    /**
     * getTag - Get a specific tag
     */
    'get'(
      parameters?: Parameters<Paths.GetTag.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTag.Responses.$200>
  }
  ['/t/{id}/posts.json']: {
    /**
     * getSpecificPostsFromTopic - Get specific posts from a topic
     */
    'get'(
      parameters?: Parameters<Paths.GetSpecificPostsFromTopic.PathParameters & Paths.GetSpecificPostsFromTopic.HeaderParameters> | null,
      data?: Paths.GetSpecificPostsFromTopic.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSpecificPostsFromTopic.Responses.$200>
  }
  ['/t/{id}.json']: {
    /**
     * getTopic - Get a single topic
     */
    'get'(
      parameters?: Parameters<Paths.GetTopic.PathParameters & Paths.GetTopic.HeaderParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTopic.Responses.$200>
    /**
     * removeTopic - Remove a topic
     */
    'delete'(
      parameters?: Parameters<Paths.RemoveTopic.PathParameters & Paths.RemoveTopic.HeaderParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.RemoveTopic.Responses.$200>
  }
  ['/t/-/{id}.json']: {
    /**
     * updateTopic - Update a topic
     */
    'put'(
      parameters?: Parameters<Paths.UpdateTopic.PathParameters & Paths.UpdateTopic.HeaderParameters> | null,
      data?: Paths.UpdateTopic.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateTopic.Responses.$200>
  }
  ['/t/{id}/invite.json']: {
    /**
     * inviteToTopic - Invite to topic
     */
    'post'(
      parameters?: Parameters<Paths.InviteToTopic.PathParameters & Paths.InviteToTopic.HeaderParameters> | null,
      data?: Paths.InviteToTopic.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.InviteToTopic.Responses.$200>
  }
  ['/t/{id}/bookmark.json']: {
    /**
     * bookmarkTopic - Bookmark topic
     */
    'put'(
      parameters?: Parameters<Paths.BookmarkTopic.PathParameters & Paths.BookmarkTopic.HeaderParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.BookmarkTopic.Responses.$200>
  }
  ['/t/{id}/status.json']: {
    /**
     * updateTopicStatus - Update the status of a topic
     */
    'put'(
      parameters?: Parameters<Paths.UpdateTopicStatus.PathParameters & Paths.UpdateTopicStatus.HeaderParameters> | null,
      data?: Paths.UpdateTopicStatus.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateTopicStatus.Responses.$200>
  }
  ['/latest.json']: {
    /**
     * listLatestTopics - Get the latest topics
     */
    'get'(
      parameters?: Parameters<Paths.ListLatestTopics.QueryParameters & Paths.ListLatestTopics.HeaderParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListLatestTopics.Responses.$200>
  }
  ['/top.json']: {
    /**
     * listTopTopics - Get the top topics filtered by period
     */
    'get'(
      parameters?: Parameters<Paths.ListTopTopics.QueryParameters & Paths.ListTopTopics.HeaderParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListTopTopics.Responses.$200>
  }
  ['/t/{id}/notifications.json']: {
    /**
     * setNotificationLevel - Set notification level
     */
    'post'(
      parameters?: Parameters<Paths.SetNotificationLevel.PathParameters & Paths.SetNotificationLevel.HeaderParameters> | null,
      data?: Paths.SetNotificationLevel.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SetNotificationLevel.Responses.$200>
  }
  ['/t/{id}/change-timestamp.json']: {
    /**
     * updateTopicTimestamp - Update topic timestamp
     */
    'put'(
      parameters?: Parameters<Paths.UpdateTopicTimestamp.PathParameters & Paths.UpdateTopicTimestamp.HeaderParameters> | null,
      data?: Paths.UpdateTopicTimestamp.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateTopicTimestamp.Responses.$200>
  }
  ['/t/{id}/timer.json']: {
    /**
     * createTopicTimer - Create topic timer
     */
    'post'(
      parameters?: Parameters<Paths.CreateTopicTimer.PathParameters & Paths.CreateTopicTimer.HeaderParameters> | null,
      data?: Paths.CreateTopicTimer.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateTopicTimer.Responses.$200>
  }
  ['/uploads.json']: {
    /**
     * createUpload - Creates an upload
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateUpload.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateUpload.Responses.$200>
  }
  ['/user-badges/{username}.json']: {
    /**
     * listUserBadges - List badges for a user
     */
    'get'(
      parameters?: Parameters<Paths.ListUserBadges.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListUserBadges.Responses.$200>
  }
  ['/users.json']: {
    /**
     * createUser - Creates a user
     */
    'post'(
      parameters?: Parameters<Paths.CreateUser.HeaderParameters> | null,
      data?: Paths.CreateUser.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateUser.Responses.$200>
  }
  ['/u/{username}.json']: {
    /**
     * getUser - Get a single user by username
     */
    'get'(
      parameters?: Parameters<Paths.GetUser.PathParameters & Paths.GetUser.HeaderParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetUser.Responses.$200>
  }
  ['/u/by-external/{external_id}.json']: {
    /**
     * getUserExternalId - Get a user by external_id
     */
    'get'(
      parameters?: Parameters<Paths.GetUserExternalId.PathParameters & Paths.GetUserExternalId.HeaderParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetUserExternalId.Responses.$200>
  }
  ['/u/by-external/{provider}/{external_id}.json']: {
    /**
     * getUserIdentiyProviderExternalId - Get a user by identity provider external ID
     */
    'get'(
      parameters?: Parameters<Paths.GetUserIdentiyProviderExternalId.PathParameters & Paths.GetUserIdentiyProviderExternalId.HeaderParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetUserIdentiyProviderExternalId.Responses.$200>
  }
  ['/u/{username}/preferences/avatar/pick.json']: {
    /**
     * updateAvatar - Update avatar
     */
    'put'(
      parameters?: Parameters<Paths.UpdateAvatar.PathParameters> | null,
      data?: Paths.UpdateAvatar.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateAvatar.Responses.$200>
  }
  ['/u/{username}/preferences/email.json']: {
    /**
     * updateEmail - Update email
     */
    'put'(
      parameters?: Parameters<Paths.UpdateEmail.PathParameters> | null,
      data?: Paths.UpdateEmail.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateEmail.Responses.$200>
  }
  ['/directory_items.json']: {
    /**
     * listUsersPublic - Get a public list of users
     */
    'get'(
      parameters?: Parameters<Paths.ListUsersPublic.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListUsersPublic.Responses.$200>
  }
  ['/admin/users/{id}.json']: {
    /**
     * adminGetUser - Get a user by id
     */
    'get'(
      parameters?: Parameters<Paths.AdminGetUser.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AdminGetUser.Responses.$200>
    /**
     * deleteUser - Delete a user
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteUser.PathParameters> | null,
      data?: Paths.DeleteUser.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteUser.Responses.$200>
  }
  ['/admin/users/{id}/suspend.json']: {
    /**
     * suspendUser - Suspend a user
     */
    'put'(
      parameters?: Parameters<Paths.SuspendUser.PathParameters> | null,
      data?: Paths.SuspendUser.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SuspendUser.Responses.$200>
  }
  ['/admin/users/{id}/anonymize.json']: {
    /**
     * anonymizeUser - Anonymize a user
     */
    'put'(
      parameters?: Parameters<Paths.AnonymizeUser.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AnonymizeUser.Responses.$200>
  }
  ['/admin/users/{id}/log_out.json']: {
    /**
     * logOutUser - Log a user out
     */
    'post'(
      parameters?: Parameters<Paths.LogOutUser.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.LogOutUser.Responses.$200>
  }
  ['/user_avatar/{username}/refresh_gravatar.json']: {
    /**
     * refreshGravatar - Refresh gravatar
     */
    'post'(
      parameters?: Parameters<Paths.RefreshGravatar.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.RefreshGravatar.Responses.$200>
  }
  ['/admin/users/list/{flag}.json']: {
    /**
     * adminListUsers - Get a list of users
     */
    'get'(
      parameters?: Parameters<Paths.AdminListUsers.PathParameters & Paths.AdminListUsers.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AdminListUsers.Responses.$200>
  }
  ['/user_actions.json']: {
    /**
     * listUserActions - Get a list of user actions
     */
    'get'(
      parameters?: Parameters<Paths.ListUserActions.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListUserActions.Responses.$200>
  }
  ['/session/forgot_password.json']: {
    /**
     * sendPasswordResetEmail - Send password reset email
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.SendPasswordResetEmail.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SendPasswordResetEmail.Responses.$200>
  }
  ['/users/password-reset/{token}.json']: {
    /**
     * changePassword - Change password
     */
    'put'(
      parameters?: Parameters<Paths.ChangePassword.PathParameters> | null,
      data?: Paths.ChangePassword.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ChangePassword.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
