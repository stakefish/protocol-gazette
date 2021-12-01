export default {
  sources: {
    'algorand.discord.algorand-general': {
      topic: "algorand-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'algorand-general',
        channelId: '930177874806337536'
      }
    },
    'algorand.discourse': {
      topic: "algorand",
      type: "discourse",
      syncEnabled: true,
      notificationsEnabled: true,
      discourse: {
        baseUrl: 'https://forum.algorand.org',
        filter: {
          type: "categories",
          categories: [
            {
              slug: "governance",
              id: 14
            }
          ]
        }
      }
    },
  }
}