export default {
  sources: {
    'polygon.discord.polygon-ecosystem': {
      topic: "polygon-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'polygon-ecosystem',
        channelId: '930164012841316372'
      }
    },
    'polygon.discord.polygon-dev': {
      topic: "polygon-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'polygon-dev',
        channelId: '930164267456548994'
      }
    },
    'polygon.discord.polygon-hermez': {
      topic: "polygon-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'polygon-hermez',
        channelId: '930164536080728135'
      }
    },
    'polygon.discord.polygon-products': {
      topic: "polygon-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'polygon-products',
        channelId: '930164670709522534'
      }
    },
    'polygon.discord.polygon-validators': {
      topic: "polygon",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'polygon-validators',
        channelId: '930164796429590569'
      }
    },
    'polygon.discord.polygon-node-updates': {
      topic: "polygon",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'polygon-node-updates',
        channelId: '930164982375645235'
      }
    },
    'polygon.discourse': {
      topic: "polygon",
      type: "discourse",
      syncEnabled: true,
      notificationsEnabled: true,
      discourse: {
        baseUrl: 'https://forum.polygon.technology',
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
    },
  }
}