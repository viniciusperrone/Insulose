import { Request, Response } from 'express';

import database from '../../../../shared/infra/database/connection';

class  AllSnacksController {
    async get(request: Request, response: Response) {
        const {
            user_id
        } = request.body;

        if(!user_id){
            return response.json('Error');
        }
        const snacks = await database('snack').select("*").where("user_id", Number(user_id));

        return response.json(snacks); 

    }
}

export { AllSnacksController };