import Knex from 'knex';

const config: Knex.Config = {
  client: 'pg',
  connection: { 
    connectionString: process.env.DATABASE_URL,
    // ssl: { rejectUnauthorized: false }
  },
  migrations: {
    extension: 'ts',
    directory: './migrations',
  },
  seeds: {
    extension: 'ts',
    directory: './seeds',
  },
};

export default config;
