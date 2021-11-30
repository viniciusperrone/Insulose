import { Request, Response } from 'express';

import database from '../../../../shared/infra/database/connection';

class  AllGlucoseController {
    async get(request: Request, response: Response) {
        const {
            user_id
        } = request.body;

        if(!user_id){
            return response.json('Error');
        }

        const glucoses = await database('glucose').select("*").where("user_id", Number(user_id));

        return response.json(glucoses); 

    }
    async count(request: Request, response: Response) {
        const {
            user_id
        } = request.body;

        if(!user_id){
            return response.json('Error');
        }

        const glucoses = await database('glucose').count('id').where("user_id", Number(user_id)).first();

        return response.json(glucoses); 

    }
}

export { AllGlucoseController };