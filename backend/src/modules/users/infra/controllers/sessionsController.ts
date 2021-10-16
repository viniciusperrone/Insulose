import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';

import database from '../../../../shared/infra/database/connection';
import authConfig from '../../../../config/token';

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

    const token = sign({}, authConfig.jwt.secret, {
      subject: String(session.id),
      expiresIn: authConfig.jwt.expiresIn
    });

    return response.json({
      session,
      token
    });
  }
}

export { SessionsController };