import { Request, Response } from 'express';

import database from '../../../../shared/infra/database/connection';

class UserController {
  async create(request: Request, response: Response){
    const {
      first_name,
      last_name,
      birth_date,
      sex_gender,
      weight,
      height,
      email,
      password
    } = request.body;

    const user = {
      first_name: first_name,
      last_name: last_name,
      birth_date: birth_date,
      sex_gender: sex_gender,
      weight: weight,
      height: height,
      email: email,
      password: password
    }

    const register = await database('users').insert(user);

    const id_user = register[0];

    return response.json({
      id_user,
      ...user
    });
  }
}

export { UserController };