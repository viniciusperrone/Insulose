import { Knex } from 'knex';

export async function up(knex: Knex){
  return await knex.schema.createTable('medicine', table => {
    table.increments('id').primary(),
    table.integer('user_id').unsigned().nullable
    table.string('name_medicine').notNullable(),
    table.string('hours_medicine').notNullable(),
    table.float('quantity_medicine').notNullable(),
    table.integer('times_day').notNullable(),
    table.foreign('user_id')
      .references('users.id')
  });
}

export async function down(knex: Knex){
  return await knex.schema.dropTable('medicine');
}