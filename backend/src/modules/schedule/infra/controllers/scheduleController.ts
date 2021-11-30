import { Request, Response } from 'express';

import database from '../../../../shared/infra/database/connection';

class  ScheduleController {
    async create(request: Request, response: Response) {
        const {
            event,
            hours,
            specialty,
            professional,
            other_professional,
            other_specialty,
            user_id
        } = request.body;

        const schedule = {
            event: event,
            hours: hours,
            specialty: specialty,
            professional: professional,
            other_professional: other_professional,
            other_specialty: other_specialty,
            user_id: user_id,
        }

        const register = await database('schedule').insert(schedule);

        const id_schedule = register[0];

        return response.json({
            id_schedule,
            ...schedule
        });
    }
}

export { ScheduleController };