import { Router } from 'express';

import { AllScheduleController } from '../controllers/allScheduleController';

import isAuthenticated from '../../../../shared/infra/http/middlewares/isAutheticated';

const allScheduleRoutes = Router();

const allScheduleController = new AllScheduleController();

allScheduleRoutes.use(isAuthenticated);

allScheduleRoutes.post('/', allScheduleController.get);

export default allScheduleRoutes;