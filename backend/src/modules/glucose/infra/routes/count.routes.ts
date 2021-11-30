import { Router } from 'express';

import { AllGlucoseController } from '../controllers/allGlucoseController';

import isAuthenticated from '../../../../shared/infra/http/middlewares/isAutheticated';

const countRoutes = Router();

const allGlucoseController = new AllGlucoseController();

countRoutes.use(isAuthenticated);

countRoutes.post('/', allGlucoseController.count);

export default countRoutes;