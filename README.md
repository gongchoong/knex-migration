# Sample knex migrations with Typescript
Sample to use knex migrations with PostgreSQL and Typescript support.

### Create your db in `PostgreSQL`:
```sql
create database [database-name]
```

### Initialize knex with typescript:
```bash
npx knex init -x ts
```

### Create migration file:
```bash
npx knex --knexfile src/knexfile.ts migrate:make [name-of-migration]
```

### Update your database to last version:
```bash
npx knex --knexfile src/knexfile.ts migrate:latest
```

### Rollback all migrations
```bash
npx knex --knexfile src/knexfile.ts migrate:rollback --all
```

### Create seed file:
```bash
npx knex --knexfile src/knexfile.ts seed:make [name-of-seed]
```

### Run all seeds:
```bash
npx knex --knexfile src/knexfile.ts seed:run
```

### Show completed and pending migrations:
```bash
npx knex --knexfile src/knexfile.ts migrate:list
```

[Others commands in reference document](https://knexjs.org/#Migrations-CLI)