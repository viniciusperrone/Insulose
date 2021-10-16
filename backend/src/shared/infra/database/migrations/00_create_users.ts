import { Knex } from 'knex';

export async function up(knex: Knex){
  return await knex.schema.createTable('users', table => {
    table.increments('id').primary(),
    table.string('first_name').notNullable(),
    table.string('last_name').notNullable(),
    table.date('birth_date').notNullable(),
    table.string('sex_gender').notNullable();
    table.float('weight').notNullable(),
    table.float('height').notNullable(),
    table.string('email').notNullable(),
    table.string('password').notNullable()
  });
}

export async function down(knex: Knex){
  return await knex.schema.dropTable('users');
}