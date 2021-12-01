#!/bin/bash -e

pushd web
yarn install --frozen-lockfile
yarn build
popd

cp -R web/build server/
cd server
yarn install --frozen-lockfile
yarn start
