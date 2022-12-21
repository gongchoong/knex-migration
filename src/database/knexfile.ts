// import Knex from 'knex';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

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

module.exports = {
  local: {
    client: 'postgresql',
    connection: {
      user : 'postgres',
      password : 'postgres',
      database : 'sample_db'
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
    useNullAsDefault: true
  },
}
