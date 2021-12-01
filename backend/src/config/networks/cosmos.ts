export default {
  sources: {
    'cosmos.discord.cosmos-general': {
      topic: "cosmos-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'cosmos-general',
        channelId: '930160830354440302'
      }
    },
    'cosmos.discord.cosmos-dev': {
      topic: "cosmos-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'cosmos-dev',
        channelId: '930160970561617951'
      }
    },
    'cosmos.discourse': {
      topic: "cosmos",
      type: "discourse",
      syncEnabled: true,
      notificationsEnabled: true,
      discourse: {
        baseUrl: 'https://forum.cosmos.network',
        apiUsername: 'teddyknox',
        apiKey: 'ac810a87233b50d12b24b717ab75eb366b573340e6d9804b0144c795034537f6',
        filter: {
          type: "categories",
          categories: [
            {
              slug: "governance",
              id: 16
            }
          ]
        }
      }
    },
  }
}