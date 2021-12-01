export default {
  sources: {
    'iris.discord.irisnet-general': {
      topic: "iris-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'irisnet-general',
        channelId: '930170866942242847'
      }
    },
    'iris.discourse': {
      topic: "iris",
      type: "discourse",
      syncEnabled: true,
      notificationsEnabled: true,
      discourse: {
        baseUrl: 'https://forum.irisnet.org',
        filter: {
          type: "categories",
          categories: [
            {
              slug: "governance",
              id: 5
            }
          ]
        }
      }
    }
  }
}