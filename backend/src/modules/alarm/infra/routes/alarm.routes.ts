import { Router } from 'express';

import { AlarmController } from '../controllers/alarmController';

const alarmRouters = Router();

const alarmController = new AlarmController();

alarmRouters.post('/', alarmController.create);

export default alarmRouters;