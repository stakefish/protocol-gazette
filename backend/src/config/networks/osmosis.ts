export default {
  sources: {
    'osmosis.discord.osmosis-general': {
      topic: "osmosis-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'osmosis-general',
        channelId: '930170241277894746'
      }
    },
    'osmosis.discord.osmosis-governance': {
      topic: "osmosis",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'osmosis-governance',
        channelId: '930170347196670032'
      }
    },
    'osmosis.discord.osmosis-testnet': {
      topic: "osmosis-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'osmosis-testnet',
        channelId: '930170444332548096'
      }
    },
  }
}