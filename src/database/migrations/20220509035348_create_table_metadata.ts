import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('metadata', function createTable(table) {
    table.bigint('id').notNullable().primary();

    table.string('name').notNullable();
    table.string('description').notNullable();
    table.string('image');
    table.string('image_data');
    table.string('external_url');
    table.string('background_color');
    table.string('animation_url');
    table.string('youtube_url');
    table.jsonb('attributes').defaultTo([]);

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('metadata');
}
