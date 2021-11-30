import { Knex } from 'knex';

export async function up(knex: Knex) {
  return await knex.schema.createTable('schedule', table => {
    table.increments('id').primary(),
    table.integer('user_id').unsigned().nullable(),
    table.string('event').notNullable(),
    table.string('hours').notNullable(),
    table.string('specialty').notNullable(),
    table.string('professional').notNullable(),
    table.string('other_professional').notNullable(),
    table.string('other_specialty').notNullable(),
    table.foreign('user_id')
      .references('users.id')
  });
}

export async function down(knex: Knex) {
  return await knex.schema.dropTable('schedule');
}