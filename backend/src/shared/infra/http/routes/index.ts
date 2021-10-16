import { Router } from 'express';

import usersRouters from '../../../../modules/users/infra/routes/users.routes';
import sessionsRouters from '../../../../modules/users/infra/routes/sessions.routes';

const routes = Router();

routes.use('/signup', usersRouters);
routes.use('/sessions', sessionsRouters);

export default routes;