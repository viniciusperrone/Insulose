import { Request, Response } from 'express';

import database from '../../../../shared/infra/database/connection';

class ProfileController {
  async update(request: Request, response: Response){
    const {
      id_user,
      first_name,
      last_name,
      sex_gender,
      date_birth,
      weight,
      height
    } = request.body;

    const user = {
      first_name: first_name,
      last_name: last_name,
      sex_gender: sex_gender,
      date_birth: date_birth,
      weight: weight,
      height: height
    }

    const profile = await database('users').where("id", id_user).update(user);

    return response.json(user);
  }
}

export { ProfileController }