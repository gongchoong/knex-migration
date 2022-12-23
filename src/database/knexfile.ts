//const local = 'postgres://postgres:postgres@localhost:5432/sample_db?sslmode=disable';
const production = process.env.DATABASE_URL;

module.exports = {
  local: {
    client: 'pg',
    connection: {
      connectionString: production,
      ssl: { rejectUnauthorized: false },
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
