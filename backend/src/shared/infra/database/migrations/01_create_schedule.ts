import { Knex } from 'knex';

export async function up(knex: Knex) {
  return await knex.schema.createTable('schedule', table => {
    table.increments('id').primary(),
    table.string('event').notNullable(),
    table.datetime('hours').notNullable(),
    table.string('specialty').notNullable(),
    table.string('professional').notNullable(),
    table.string('other_professional').notNullable(),
    table.string('other_specialty').notNullable(),
    table.string('id_user_schedule')
      .notNullable()
      .references('id')
      .inTable('users')
  });
}

export async function down(knex: Knex) {
  return await knex.schema.dropTable('schedule');
}