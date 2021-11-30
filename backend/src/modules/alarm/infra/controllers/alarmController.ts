import { Request, Response } from 'express';

import database from '../../../../shared/infra/database/connection';

class AlarmController {
    async create(request: Request, response: Response) {
        const {
            alarm_name,
            hours,
            date,
            user_id
        } = request.body;

        const alarm = {
            alarm_name: alarm_name,
            hours: hours,
            date: date,
            user_id: user_id,
        }

        const register = await database('alarm').insert(alarm);

        const id_alarm = register[0];

        return response.json({
            id_alarm,
            ...alarm
        });
    }
}

export { AlarmController };