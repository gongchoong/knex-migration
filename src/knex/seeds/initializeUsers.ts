import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('user').del();

  await knex('user').insert([
    { 
      id: 1,
      name: 'Jefferson', 
      price: 1,
      userId: 1,
      active: true,
    },
    { 
      id: 2,
      name: 'Tom', 
      price: 2,
      userId: 2,
      active: true,
    },
    { 
      id: 3,
      name: 'Cook', 
      price: 3,
      userId: 3,
      active: true,
    },
  ]);
}
