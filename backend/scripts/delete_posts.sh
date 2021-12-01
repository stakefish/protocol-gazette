#!/bin/bash -x

FILTER="Tezos"
CHANNEL="C01SWQ7FTGV"

# Every time this script is run it will delete 100 bot posts in the configured channel matching the filter.
# Defaults in dry-run mode.

# Prints messages that will be deleted if run.
curl -Ss -X GET \
    -H 'Content-type: application/json; charset=utf-8' \
    -H 'Authorization: Bearer xoxb-395562534548-2819549850132-pGaskLPFwch7yKAPNvrqjVhy' \
    https://slack.com/api/conversations.history?channel=C01SWQ7FTGV \
    | jq -r '.messages[] | select(.text | contains("'"$FILTER"'")) | .text'


# Uncomment this to enable deletion for real.
# curl -Ss -X GET \
#     -H 'Content-type: application/json; charset=utf-8' \
#     -H 'Authorization: Bearer xoxb-395562534548-2819549850132-pGaskLPFwch7yKAPNvrqjVhy' \
#     https://slack.com/api/conversations.history?channel=$CHANNEL \
#   | jq -r '.messages[] | select(.text | contains("'"$FILTER"'")) | ["C01SWQ7FTGV", .ts] | @csv' \
#   > ~/Downloads/results.csv
# 
# while IFS=, read -r c ts; do
#   curl -Ss -X POST \
#   -H 'Content-type: application/json' \
#   -H 'Authorization: Bearer xoxb-395562534548-2819549850132-pGaskLPFwch7yKAPNvrqjVhy' \
#   -d '{
#     "channel": '$c',
#     "ts": '$ts'
#   }' \
#   https://slack.com/api/chat.delete 
#   sleep 1
# done < ~/Downloads/results.csv
