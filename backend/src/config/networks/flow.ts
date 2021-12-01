export default {
  sources: {
    'flow.discord.flow-general': {
      topic: "flow-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'flow-general',
        channelId: '930167599738810428'
      }
    },
    'flow.discord.flow-developer-updates': {
      topic: "flow",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'flow-developer-updates',
        channelId: '930167708539047936'
      }
    },
    'flow.discourse': {
      topic: "flow",
      type: "discourse",
      syncEnabled: true,
      notificationsEnabled: true,
      discourse: {
        baseUrl: 'https://forum.onflow.org',
        filter: {
          type: "categories",
          categories: [
            {
              slug: "governance",
              id: 24
            },
            {
              slug: "mainnet-sporks",
              id: 36
            }
          ]
        }
      }
    }
  }
}