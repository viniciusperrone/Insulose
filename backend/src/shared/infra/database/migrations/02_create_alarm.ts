import { Knex } from 'knex';

export async function up(knex: Knex) {
  return await knex.schema.createTable('alarm', table => {
    table.increments('id').primary(),
      table.string('alarm_name').notNullable(),
      table.time('hours').notNullable(),
      table.date('date').notNullable(),
      table.string('user_id')
      .references('id')
      .inTable('users')
      .index()
  });
}

export async function down(knex: Knex) {
  return await knex.schema.dropTable('alarm');
}