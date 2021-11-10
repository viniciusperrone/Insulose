import { Router } from 'express';

import { ProfileController } from '../controllers/profileController';

const profileRouters = Router();

const profileController = new ProfileController();

profileRouters.put('/', profileController.update);

export default profileRouters;