export default {
  sources: {
    'kava.discord.kava-validator': {
      topic: "kava-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'kava-validator',
        channelId: '930168110034608209'
      }
    },
  }
}