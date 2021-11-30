import { Router } from 'express';

import { UserController } from '../controllers/usersController';

const usersRouters = Router();

const usersController = new UserController();

usersRouters.post('/', usersController.create);

export default usersRouters;