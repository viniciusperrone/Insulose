import { Router } from 'express';

import { GlucoseController } from '../controllers/glucoseController';

import isAuthenticated from '../../../../shared/infra/http/middlewares/isAutheticated';

const glucosesRoutes = Router();

const glucoseController = new GlucoseController();

glucosesRoutes.use(isAuthenticated);

glucosesRoutes.post('/', glucoseController.create);

export default glucosesRoutes;