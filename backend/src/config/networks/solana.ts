export default {
  sources: {
    'solana.discourse': {
      topic: "solana",
      type: "discourse",
      syncEnabled: true,
      notificationsEnabled: true,
      discourse: {
        baseUrl: 'https://forums.solana.com',
        filter: {
          type: "categories",
          categories: [
            {
              slug: "governance",
              id: 10
            }
          ]
        }
      }
    },
  }
}