FROM node:14-alpine as build
WORKDIR /app
COPY web/package.json web/yarn.lock ./
RUN yarn install --frozen-lockfile
COPY web/ ./
RUN yarn build

FROM node:alpine
WORKDIR /app
COPY server/package.json server/yarn.lock ./
RUN yarn install --frozen-lockfile
COPY ./server ./
COPY --from=build /app/build ./build
ENTRYPOINT ["yarn", "ts-node", "src/index.ts"]
