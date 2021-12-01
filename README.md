# Gazette

If you're a protocol specialist at a proof-of-stake validator, you know how tiresome it can be to keep up with the news, especially the governance news. Each network has its own Discord servers, Discourse forums, Twitter accounts, etc to follow, and with 20+ this quickly becomes too much to naively manage.

To simplify our job on governance at Stakefish, we built a simple service to watch these various communication channels and relay their messages to our source-of-truth: Slack.

Data sources for the system can either be either push or pull, and the Slack channel outputs are highly configurable to support a variety of use-cases. For example, you might prefer for the Slackbot to put all network alerts in a single channel, or separate network alerts into network-specific channel. You could even settle on a hybrid approach where all the outputs go to the same place but then slack message permalinks get cross-posted to network specific channels (our configuration).