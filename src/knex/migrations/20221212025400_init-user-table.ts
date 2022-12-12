import * as Knex from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('firstName').notNullable()
    table.dateTime('createdAt').notNullable().defaultTo(knex.fn.now())
    table.dateTime('updatedAt').notNullable().defaultTo(knex.fn.now())
    table.dateTime('deletedAt').index()
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
}
