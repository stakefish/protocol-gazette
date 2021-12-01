export default {
  sources: {
    'centrifuge.discord.centrifuge-general': {
      topic: "centrifuge-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'centrifuge-general',
        channelId: '930178295985766491'
      }
    },
    'centrifuge.discord.centrifuge-altair': {
      topic: "centrifuge-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'centrifuge-altair',
        channelId: '930178473186713620'
      }
    },
    'centrifuge.discourse': {
      topic: "centrifuge",
      type: "discourse",
      syncEnabled: true,
      notificationsEnabled: true,
      discourse: {
        baseUrl: 'https://gov.centrifuge.io',
        filter: {
          type: "categories",
          categories: [
            {
              slug: "governance",
              id: 35
            }
          ]
        }
      }
    }
  }
}