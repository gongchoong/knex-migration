// import Knex from 'knex';
// eslint-disable-next-line @typescript-eslint/no-var-requires

// const config: Knex.Config = {
//   client: 'pg',
//   connection: 'postgres://postgres:postgres@postgres:5432/sample_db',
//   migrations: {
//     directory: './migrations',
//   },
//   seeds: {
//     directory: './seeds',
//   },
// };

// const local = 'postgres://postgres:postgres@localhost:5432/sample_db';

module.exports = {
  local: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
    useNullAsDefault: true
  },
}
