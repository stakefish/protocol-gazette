export default {
  sources: {
    'cardano.discourse': {
      topic: "cardano",
      type: "discourse",
      syncEnabled: true,
      notificationsEnabled: true,
      discourse: {
        baseUrl: 'https://forum.cardano.org',
        filter: {
          type: "categories",
          categories: [
            {
              slug: "english/governance",
              id: 140
            }
          ]
        }
      }
    }
  }
}