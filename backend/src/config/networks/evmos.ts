export default {
  sources: {
    'evmos.discord.evmos-general': {
      topic: "evmos-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'evmos-general',
        channelId: '930179179033559083'
      }
    },
    'evmos.discord.evmos-testnet': {
      topic: "evmos-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'evmos-testnet',
        channelId: '930179275695456296'
      }
    },
  }
}