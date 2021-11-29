import { Knex } from 'knex';

export async function up(knex: Knex) {
  return await knex.schema.createTable('alarm', table => {
    table.increments('id').primary(),
    table.integer('user_id').unsigned().nullable(),
    table.string('alarm_name').notNullable(),
    table.time('hours').notNullable(),
    table.date('date').notNullable(),
    table.foreign('user_id')
      .references('users.id')
  });
}

export async function down(knex: Knex) {
  return await knex.schema.dropTable('alarm');
}