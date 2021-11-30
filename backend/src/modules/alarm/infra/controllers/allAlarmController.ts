import { Request, Response } from 'express';

import database from '../../../../shared/infra/database/connection';

class  AllAlarmController {
    async get(request: Request, response: Response) {
        const {
            user_id
        } = request.query;

        if(!user_id){
            return response.json('Error');
        }
        const alarms = await database('alarm').select("*").where("user_id", Number(user_id));

        return response.json(alarms); 

    }
}

export { AllAlarmController };