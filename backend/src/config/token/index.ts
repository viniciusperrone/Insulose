import dotenv from 'dotenv';

dotenv.config();

export default {
  jwt: {
    secret: String(process.env.ACESS_KEY_TOKEN),
    expiresIn: String(process.env.EXPIRE_TOKEN)
  }
}