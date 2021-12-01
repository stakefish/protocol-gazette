import { knex, Knex } from 'knex'

let cached: { instance: Knex | undefined } = { instance: undefined }

export function getKnex() {
  if (!cached.instance) cached.instance = knex({
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
    }
  })
  return cached.instance
}