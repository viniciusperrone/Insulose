import { Router } from 'express';

import usersRouters from '../../../../modules/users/infra/routes/users.routes';
import sessionsRouters from '../../../../modules/users/infra/routes/sessions.routes';
import profileRouters from '../../../../modules/users/infra/routes/profile.routes';
import glucosesRoutes from '../../../../modules/glucose/infra/routes/glucoses';
import allGlucosesRoutes from '../../../../modules/glucose/infra/routes/allGlucoses.routes';
import scheduleRoutes from '../../../../modules/schedule/infra/routes/schedule.routes';
import allScheduleRoutes from '../../../../modules/schedule/infra/routes/allSchedule.routes';
import medicineRouters from '../../../../modules/medicine/infra/routes/medicine.routes';
import allMedicineRoutes from '../../../../modules/medicine/infra/routes/AllMedicine.routes';
import alarmRouters from '../../../../modules/alarm/infra/routes/alarm.routes';
import allAlarmRoutes from '../../../../modules/alarm/infra/routes/allAlarms.routes';
import snackRouters from '../../../../modules/snack/infra/routes/snack.routes';
import allSnacksRoutes from '../../../../modules/snack/infra/routes/allSnack.routes';

const routes = Router();

routes.use('/signup', usersRouters);
routes.use('/sessions', sessionsRouters);
routes.use('/update', profileRouters);
routes.use('/glucose', glucosesRoutes);
routes.use('/all/glucoses', allGlucosesRoutes);
routes.use('/schedule', scheduleRoutes);
routes.use('/all/schedules', allScheduleRoutes);
routes.use('/medicine', medicineRouters);
routes.use('/all/medicines', allMedicineRoutes);
routes.use('/alarm', alarmRouters);
routes.use('/all/alarms', allAlarmRoutes);
routes.use('/snack', snackRouters);
routes.use('/all/snacks', allSnacksRoutes);

export default routes;