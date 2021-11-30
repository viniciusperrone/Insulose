import { Router } from 'express';

import { SnackController } from '../controllers/snackController';

const snackRouters = Router();

const snackController = new SnackController();

snackRouters.post('/', snackController.create);

export default snackRouters;