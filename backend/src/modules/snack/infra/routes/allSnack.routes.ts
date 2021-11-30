import { Router } from 'express';

import { AllSnacksController } from '../controllers/allSnackController';

import isAuthenticated from '../../../../shared/infra/http/middlewares/isAutheticated';

const allSnacksRoutes = Router();

const allSnacksController = new AllSnacksController();

allSnacksRoutes.use(isAuthenticated);

allSnacksRoutes.get('/:user_id', allSnacksController.get);

export default allSnacksRoutes;