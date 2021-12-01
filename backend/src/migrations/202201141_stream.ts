import { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    alter table topics rename network to stream;
    alter table posts rename network to stream;
  `)
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw(`
    alter table topics stream stream to network;
    alter table stream rename stream to network;
  `)
}