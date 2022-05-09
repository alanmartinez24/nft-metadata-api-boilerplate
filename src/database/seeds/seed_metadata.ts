import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('metadata').del();

  // Inserts seed entries
  await knex('metadata').insert([
    {
      id: 1,
      name: 'Test 1',
      description: 'Test NFT',
      attributes: JSON.stringify([
        {
          trait_type: 'Eye',
          value: 'Big'
        }
      ])
    },
    {
      id: 2,
      name: 'Test 2',
      description: 'Test NFT',
      attributes: JSON.stringify([
        {
          trait_type: 'Eye',
          value: 'Small'
        },
        {
          trait_type: 'Color',
          value: 'Red'
        },
        {
          value: 'Nice'
        }
      ])
    }
  ]);
}
