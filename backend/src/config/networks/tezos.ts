export default {
  sources: {
    'tezos.discourse': {
      topic: "tezos",
      type: "discourse",
      syncEnabled: true,
      notificationsEnabled: true,
      discourse: {
        baseUrl: 'https://forum.tezosagora.org',
        apiUsername: 'system',
        apiKey: '3962a734389977179907151a69ac40734b67fb4fd7dfa8dcd8f4ead4da1b25ca',
        filter: {
          type: "categories",
          categories: [
            {
              slug: "proposals",
              id: 5
            },
            {
              slug: "tzip",
              id: 16
            },
            {
              slug: "research",
              id: 10
            },
          ]
        },
      }
    },
  }
}