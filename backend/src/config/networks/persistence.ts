import { DiscourseTopic } from "../../sources/discourse/clientTypes"

export default {
  sources: {
    'persistence.discord.persistence-general': {
      topic: "persistence-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'persistence-general',
        channelId: '930173172098166794'
      }
    },
    'persistence.discord.persistence-pstake': {
      topic: "persistence-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'persistence-pstake',
        channelId: '930173277266133002'
      }
    },
    'persistence.discourse': {
      topic: "persistence",
      type: "discourse",
      syncEnabled: true,
      notificationsEnabled: true,
      discourse: {
        baseUrl: 'https://forum.persistence.one',
        filter: {
          type: "function",
          function: (t: DiscourseTopic) => {
            // https://forum.persistence.one/c/uncategorized/1
            return true
          }
        }
      }
    },
  }
}