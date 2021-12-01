import { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    CREATE TABLE topics (
        id integer,
        category_id integer,
        network character varying,
        title character varying NOT NULL,
        created_at timestamp without time zone NOT NULL,
        last_posted_at timestamp without time zone NOT NULL,
        url character varying NOT NULL,
        CONSTRAINT "PK_458ea3be462e648848b6e732821" PRIMARY KEY (id, network)
    );
    
    CREATE UNIQUE INDEX ON topics(id int4_ops,network text_ops);
  `)
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('topics')
}