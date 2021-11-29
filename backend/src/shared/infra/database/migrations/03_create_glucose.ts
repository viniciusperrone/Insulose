import { Knex } from 'knex';

export async function up(knex: Knex) {
  return await knex.schema.createTable('glucose', table => {
    table.increments('id').primary(),
      table.date('date_glucose').notNullable(),
      table.time('hours_glucose').notNullable(),
      table.float('level_glucose').notNullable(),
      table.string('user_id')
      .references('id')
      .inTable('users')
      .index()
  });
}

export async function down(knex: Knex) {
  return await knex.schema.dropTable('glucose');
}