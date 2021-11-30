import { Router } from 'express';

import { AllGlucoseController } from '../controllers/allGlucoseController';

import isAuthenticated from '../../../../shared/infra/http/middlewares/isAutheticated';

const allGlucosesRoutes = Router();

const allGlucoseController = new AllGlucoseController();

allGlucosesRoutes.use(isAuthenticated);

allGlucosesRoutes.get('/:user_id', allGlucoseController.get);

export default allGlucosesRoutes;