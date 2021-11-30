import { Router } from 'express';

import { AllAlarmController } from '../controllers/allAlarmController';

import isAuthenticated from '../../../../shared/infra/http/middlewares/isAutheticated';

const allAlarmRoutes = Router();

const allAlarmController = new AllAlarmController();

allAlarmRoutes.use(isAuthenticated);

allAlarmRoutes.get('/:user_id', allAlarmController.get);

export default allAlarmRoutes;