export default {
  sources: {
    'thegraph.discord.thegraph-general': {
      topic: "thegraph-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'thegraph-general',
        channelId: '930166562881683577'
      }
    },
    'thegraph.discord.thegraph-indexer': {
      topic: "thegraph-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'thegraph-indexers',
        channelId: '930166769463738399'
      }
    },
    'thegraph.discord.thegraph-stream-status': {
      topic: "thegraph-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'thegraph-stream-status',
        channelId: '930167020211826778'
      }
    },
    'thegraph.discourse.governance-gips': {
      topic: "thegraph",
      type: "discourse",
      syncEnabled: true,
      notificationsEnabled: true,
      discourse: {
        baseUrl: 'https://forum.thegraph.com',
        filter: {
          type: "categories",
          categories: [
            {
              slug: "governance-gips",
              id: 17
            }
          ]
        }
      }
    },
  },
}