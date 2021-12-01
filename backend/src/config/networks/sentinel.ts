export default {
  sources: {
    'sentinel.discord.sentinel-general': {
      topic: "sentinel-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'sentinel-general',
        channelId: '930180538587807804'
      }
    },
  }
}