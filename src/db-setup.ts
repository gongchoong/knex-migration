import { KnexFileEnv } from "../knexfile";

/* eslint-disable @typescript-eslint/no-var-requires */
const Knex = require('knex');
const { Model } = require('objection');

const knexConfig: KnexFileEnv = require('../knexfile') // eslint-disable-line @typescript-eslint/no-var-requires

function setupDb() {
    const knex = Knex(knexConfig['local']);
    Model.knex(knex);
    console.log('DB connection initialized')
}

module.exports = setupDb;