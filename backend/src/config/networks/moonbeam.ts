export default {
  sources: {
    'moonbeam.discord.moonbeam-general': {
      topic: "moonbeam-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'moonbeam-general',
        channelId: '930175256969248788'
      }
    },
    'moonbeam.discord.moonbeam-news-and-updates': {
      topic: "moonbeam-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'moonbeam-news-and-updates',
        channelId: '930175661849583686'
      }
    },
    'moonbeam.discord.moonbeam-tech-upgrades-announcements': {
      topic: "moonbeam",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'moonbeam-tech-upgrades-announcements',
        channelId: '930175792992903179'
      }
    },
  }
}