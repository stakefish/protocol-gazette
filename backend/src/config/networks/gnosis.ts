export default {
  sources: {
    'gnosis.discord.gnosis-general': {
      topic: "gnosis-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'gnosis-general',
        channelId: '930172700763238400'
      }
    },
    'gnosis.discord.gnosis-proposals': {
      topic: "gnosis",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'gnosis-proposals',
        channelId: '930172804878446633'
      }
    },
    'gnosis.discourse': {
      topic: "gnosis",
      type: "discourse",
      syncEnabled: true,
      notificationsEnabled: true,
      discourse: {
        baseUrl: 'https://forum.gnosis.io',
        filter: {
          type: "categories",
          categories: [
            {
              slug: "gnosis-protocol",
              id: 15
            }
          ]
        }
      }
    }
  }
}