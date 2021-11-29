import { Knex } from 'knex';

export async function up(knex: Knex){
  return await knex.schema.createTable('snack', table => {
    table.increments('id').primary(),
    table.integer('user_id').unsigned().nullable
    table.string('name_snack').notNullable(),
    table.integer('quantity_snack').notNullable(),
    table.float('calorie').notNullable(),
    table.string('drink').notNullable(),
    table.foreign('user_id')
      .references('users.id')
  });
}

export async function down(knex: Knex){
  return await knex.schema.dropTable('snack');
}