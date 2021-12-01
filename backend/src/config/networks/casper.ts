export default {
  sources: {
    'casper.discord.casper-general': {
      topic: "casper-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'casper-general',
        channelId: '930171328663801856'
      }
    },
    'casper.discord.casper-mainnet': {
      topic: "casper-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'casper-mainnet',
        channelId: '930171450936160256'
      }
    },
    'casper.discord.casper-testnet': {
      topic: "casper-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'casper-testnet',
        channelId: '930171534620897370'
      }
    },
    'casper.discord.casper-validator-faq': {
      topic: "casper-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'casper-validator-faq',
        channelId: '930171634449530890'
      }
    },
    'casper.discourse': {
      topic: "casper",
      type: "discourse",
      syncEnabled: true,
      notificationsEnabled: true,
      discourse: {
        baseUrl: 'https://forums.casperlabs.io',
        filter: {
          type: "categories",
          categories: [
            {
              slug: "english/governance",
              id: 26
            }
          ]
        }
      }
    },
  }
}