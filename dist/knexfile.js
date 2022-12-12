"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    client: 'pg',
    connection: {
        insecureAuth: true,
        host: 'localhost',
        user: 'postgres',
        password: 'pass@123!',
        database: 'knexDB',
    },
    migrations: {
        extension: 'ts',
        directory: 'knex/migrations',
        tableName: 'migrations_history',
    },
    seeds: {
        extension: 'ts',
        directory: 'knex/seeds',
    },
};
exports.default = config;
//# sourceMappingURL=knexfile.js.map