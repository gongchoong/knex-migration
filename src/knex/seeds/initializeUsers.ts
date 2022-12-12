import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('users').del();

  await knex('users').insert([
    { 
      id: 1,
      firstName: 'Jefferson', 
    },
    { 
      id: 2,
      firstName: 'Tom', 
    },
    { 
      id: 3,
      firstName: 'Cook', 
    },
  ]);
}
