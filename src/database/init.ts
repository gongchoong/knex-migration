/* eslint-disable @typescript-eslint/no-var-requires */
const knex = require('knex');
const knexfile = require('./knexfile');

  // Initialize knex.
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const db = knex(knexfile.local) // eslint-disable-line new-cap

  // Bind all Models to a knex instance. If you only have one database in
  // your server this is all you have to do. For multi database systems, see
  // the Model.bindKnex method.

  console.log('DB connection initialized')

  module.exports = db;
