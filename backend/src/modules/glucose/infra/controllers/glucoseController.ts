import { Request, Response } from 'express';

import database from '../../../../shared/infra/database/connection';

class  GlucoseController {
    async create(request: Request, response: Response) {
        const {
            date_glucose,
            hours_glucose,
            level_glucose,
            feeling,
            comment,
            user_id
        } = request.body;

        const glucose = {
            date_glucose: date_glucose,
            hours_glucose: hours_glucose,
            level_glucose: level_glucose,
            feeling: feeling,
            comment: comment,
            user_id: user_id,
        }

        const register = await database('glucose').insert(glucose);

        const id_glucose = register[0];

        return response.json({
            id_glucose,
            ...glucose
        });
    }
}

export { GlucoseController };