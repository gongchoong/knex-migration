import Knex from 'knex';

const config: Knex.Config = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  migrations: {
    extension: 'ts',
    directory: 'knex/migrations',
  },
  seeds: {
    extension: 'ts',
    directory: 'knex/seeds',
  },
};

export default config;
