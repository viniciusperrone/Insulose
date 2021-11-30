import { Router } from 'express';

import { AllMedicineController } from '../controllers/allMedicineController';

import isAuthenticated from '../../../../shared/infra/http/middlewares/isAutheticated';

const allMedicineRoutes = Router();

const allMedicineController = new AllMedicineController();

allMedicineRoutes.use(isAuthenticated);

allMedicineRoutes.get('/:user_id', allMedicineController.get);

export default allMedicineRoutes;