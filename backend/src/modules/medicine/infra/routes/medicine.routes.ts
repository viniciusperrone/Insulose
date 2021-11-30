import { Router } from 'express';

import { MedicineController } from '../controllers/medicineController';

const medicineRouters = Router();

const medicineController = new MedicineController();

medicineRouters.post('/', medicineController.create);

export default medicineRouters;