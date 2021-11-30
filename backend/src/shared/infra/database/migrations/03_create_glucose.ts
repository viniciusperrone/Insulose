import { Knex } from 'knex';

export async function up(knex: Knex) {
  return await knex.schema.createTable('glucose', table => {
    table.increments('id').primary(),
    table.integer('user_id').unsigned().nullable(),
    table.string('date_glucose').notNullable(),
    table.string('hours_glucose').notNullable(),
    table.float('level_glucose').notNullable(),
    table.integer('feeling').notNullable(),
    table.string('comment').notNullable(),
    table.foreign('user_id')
      .references('users.id')
  });
}

export async function down(knex: Knex) {
  return await knex.schema.dropTable('glucose');
}