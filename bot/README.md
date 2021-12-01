# governance-watch

Start with `yarn start`. In prod you must set the `POSTGRES_PASS` env var.

# DB migrations

Create a new migration by running:
```
knex migrate:make migration_name
```
Then edit the migration file that it puts out. 
Migrations are run on every server startup for simplicity. 
This means that you should only write forward migrations.
No going back in time.