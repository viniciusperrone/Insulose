import { Knex } from 'knex';

export async function up(knex: Knex){
  return await knex.schema.createTable('snack', table => {
    table.increments('id').primary(),
    table.string('name_snack').notNullable(),
    table.integer('quantity_snack').notNullable(),
    table.float('calorie').notNullable(),
    table.string('drink').notNullable(),
    table.string('user_id')
      .references('id')
      .inTable('users')
      .index()
  });
}

export async function down(knex: Knex){
  return await knex.schema.dropTable('snack');
}