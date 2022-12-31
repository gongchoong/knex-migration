import Knex from "knex";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { knexSnakeCaseMappers } = require('objection');
const local = 'postgres://postgres:postgres@host.docker.internal:5432/sample_db?sslmode=disable';
// const production = process.env.DATABASE_URL;

const defaultOptions: Knex.Config = {
  client: 'pg',
    connection: local,
    ...knexSnakeCaseMappers(),
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
}

const knexConfig: KnexFileEnv = {
  local: {
    ...defaultOptions,
  },

  development: {
    ...defaultOptions,
  },

  test: {
    ...defaultOptions,
  },

  staging: {
    ...defaultOptions,
  },

  production: {
    ...defaultOptions,
    pool: {
      min: 2,
      max: 10,
    },
  },
}

export interface KnexFileEnv {
  local: Knex.Config
  development: Knex.Config
  test: Knex.Config
  staging: Knex.Config
  production: Knex.Config
  [index: string]: Knex.Config
}

module.exports = knexConfig
