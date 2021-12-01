export default {
  sources: {
    'umee.discord.umee-general': {
      topic: "umee",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'umee-general',
        channelId: '948228673352388689'
      }
    },
    'umee.discord.umee-proposals': {
      topic: "umee",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'umee-proposals',
        channelId: '948228725579853905'
      }
    }
  }
}