import { Knex } from 'knex';

export async function up(knex: Knex){
  return await knex.schema.createTable('medicine', table => {
    table.increments('id').primary(),
    table.string('name_medicine').notNullable(),
    table.time('hours_medicine').notNullable(),
    table.float('quantity_medicine').notNullable(),
    table.integer('times_day').notNullable(),
    table.string('user_id')
      .references('id')
      .inTable('users')
      .index()
  });
}

export async function down(knex: Knex){
  return await knex.schema.dropTable('medicine');
}