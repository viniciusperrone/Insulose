import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

module.exports = {
  client: 'mysql',
  version: '5.7',
  connection: {
    host : '127.0.0.1',
    port : 3306,
    user : process.env.USER_DATABASE,
    password : process.env.PASSWORD_DATABASE,
    database : process.env.NAME_DATABASE
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'shared', 'infra', 'database', 'migrations')
  }
}