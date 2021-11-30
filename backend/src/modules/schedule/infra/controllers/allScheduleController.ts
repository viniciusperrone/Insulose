import { Request, Response } from 'express';

import database from '../../../../shared/infra/database/connection';

class  AllScheduleController {
    async get(request: Request, response: Response) {
        const {
            user_id
        } = request.query;

        const schedules = await database('schedule').select("*").where("user_id", Number(user_id));

        return response.json(schedules); 

    }
}

export { AllScheduleController };