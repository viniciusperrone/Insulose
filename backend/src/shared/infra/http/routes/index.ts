import { Router } from 'express';

import usersRouters from '../../../../modules/users/infra/routes/users.routes';

const routes = Router();

routes.use('/signup', usersRouters);

export default routes;