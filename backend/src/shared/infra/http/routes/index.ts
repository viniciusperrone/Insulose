import { Router } from 'express';

import usersRouters from '../../../../modules/users/infra/routes/users.routes';
import sessionsRouters from '../../../../modules/users/infra/routes/sessions.routes';
import profileRouters from '../../../../modules/users/infra/routes/profile.routes';

const routes = Router();

routes.use('/signup', usersRouters);
routes.use('/sessions', sessionsRouters);
routes.use('/update', profileRouters)

export default routes;