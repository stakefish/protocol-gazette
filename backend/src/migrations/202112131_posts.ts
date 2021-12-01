import { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    CREATE TABLE posts (
      id integer not null,
      network text not null,
      topic_id integer not null,
      post_number integer not null,
      version integer not null,
      body text not null,
      name text not null,
      username text not null,
      user_id integer not null,
      avatar_template text not null,
      created_at timestamp without time zone not null,
      updated_at timestamp without time zone not null,
      deleted_at timestamp without time zone,
      url character varying not null,
      primary key (id, network)
    );
  `)
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('posts')
}