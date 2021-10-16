import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const connection = knex({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    port : 3306,
    user : process.env.USER_DATABASE,
    password : process.env.PASSWORD_DATABASE,
    database : process.env.NAME_DATABASE
  },
  useNullAsDefault: true
});

export default connection;