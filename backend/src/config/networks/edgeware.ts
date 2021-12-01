export default {
  sources: {
    'edgeware.discord.edgeware-general': {
      topic: "edgeware-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'edgeware-general',
        channelId: '930169133566423040'
      }
    },
    'edgeware.discord.edgeware-governance-bulletin': {
      topic: "edgeware",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'edgeware-governance-bulletin',
        channelId: '930169277250674790'
      }
    },
    'edgeware.discord.edgeware-developer-updates': {
      topic: "edgeware-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'edgeware-developer-updates',
        channelId: '930169402693914715'
      }
    },
    'edgeware.discord.edgeware-community-updates': {
      topic: "edgeware-misc",
      type: "discord",
      syncEnabled: true,
      notificationsEnabled: true,
      discord: {
        name: 'edgeware-community-updates',
        channelId: '930169506884649000'
      }
    },
  }
}