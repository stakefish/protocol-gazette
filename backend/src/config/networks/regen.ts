export default {
  sources: {
    'regen.discord.regen-public': {
      topic: "regen",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'regen-public',
        channelId: '948279056665829436'
      }
    },
    'regen.discord.regen-validator-announcements': {
      topic: "regen",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'regen-validator-announcements',
        channelId: '948279090555797594'
      }
    },
    'regen.discord.regen-media': {
      topic: "regen-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'regen-media',
        channelId: '948279179441475686'
      }
    }
  }
}