import { Router } from 'express';

import { SessionsController } from '../controllers/sessionsController';

const sessionsController = new SessionsController();

const sessionsRouters = Router();


sessionsRouters.post('/', sessionsController.enter);

export default sessionsRouters;


