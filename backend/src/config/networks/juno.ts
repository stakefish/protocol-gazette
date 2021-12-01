export default {
  sources: {
    'juno.discord.juno-general': {
      topic: "juno-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'juno-general',
        channelId: '930176174167056444'
      }
    },
    'juno.discord.juno-governance': {
      topic: "juno",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'juno-governance',
        channelId: '930176273618190386'
      }
    },
    'juno.discord.juno-validators': {
      topic: "juno",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'juno-validators',
        channelId: '930176408305668156'
      }
    },
  }
}