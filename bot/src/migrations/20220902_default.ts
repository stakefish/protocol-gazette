import { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    CREATE TABLE installations (
      team_id text not null primary key,
      installation text
    );
  `)
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('installations')
}