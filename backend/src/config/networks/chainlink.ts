export default {
  sources: {
    'chainlink.discord.chainlink-community': {
      topic: "chainlink-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'chainlink-community',
        channelId: '930176707619586068'
      }
    },
  }
}