export default {
  sources: {
    'near.discord.near-validator': {
      topic: "near",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'near-validators',
        channelId: '930159193565048852'
      }
    },
    'near.discord.near-events': {
      topic: "near-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'near-events',
        channelId: '930159134987395082'
      }
    },
    'near.discord.near-engineering': {
      topic: "near-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'near-engineering',
        channelId: '930159248489467944'
      }
    },
    'near.discord.near-general': {
      topic: "near-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'near-general',
        channelId: '930159660042956830'
      }
    },
    'near.discourse': {
      topic: "near",
      type: "discourse",
      syncEnabled: true,
      notificationsEnabled: true,
      discourse: {
        baseUrl: 'https://gov.near.org',
        filter: {
          type: "categories",
          categories: [
            {
              slug: "gov",
              id: 6
            }
          ]
        }
      }
    },
  }
}