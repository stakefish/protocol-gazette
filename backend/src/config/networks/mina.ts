import { DiscourseTopic } from "../../sources/discourse/clientTypes"

export default {
  sources: {
    'mina.discord.mina-general': {
      topic: "mina-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'mina-general',
        channelId: '930174635415314452'
      }
    },
    'mina.discord.mina-news-and-updates': {
      topic: "mina-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'mina-news-and-updates',
        channelId: '930174758950170644'
      }
    },
    'mina.discord.mina-mainnet-updates': {
      topic: "mina-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'mina-mainnet-updates',
        channelId: '930174855851175967'
      }
    },
    'mina.discourse': {
      topic: "mina",
      type: "discourse",
      syncEnabled: true,
      notificationsEnabled: true,
      discourse: {
        baseUrl: 'https://forums.minaprotocol.com',
        filter: {
          type: "function",
          function: (t: DiscourseTopic) => {
            return (t.category_id && [24, 23, 27].includes(t.category_id)) === true
          }
        }
      }
    },
  }
}