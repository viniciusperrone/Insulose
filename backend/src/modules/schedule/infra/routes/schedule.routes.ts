import { Router } from 'express';

import { ScheduleController } from '../controllers/scheduleController';

import isAuthenticated from '../../../../shared/infra/http/middlewares/isAutheticated';

const scheduleRoutes = Router();

const scheduleController = new ScheduleController();

scheduleRoutes.use(isAuthenticated);

scheduleRoutes.post('/', scheduleController.create);

export default scheduleRoutes;