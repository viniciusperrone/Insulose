import { Request, Response } from 'express';

import database from '../../../../shared/infra/database/connection';

class SessionsController {
  async enter(request: Request, response: Response){
    const {
      email,
      password
    } = request.body;

    const session = await database('users').where({email: email, password: password}).first();

    if(!session){
      return response.status(400).json({ message: 'Credentials not found!'});
    }

    return response.json(session);
  }
}

export { SessionsController };