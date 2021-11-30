import { Request, Response } from 'express';

import database from '../../../../shared/infra/database/connection';

class  AllMedicineController {
    async get(request: Request, response: Response) {
        const {
            user_id
        } = request.query;

        if(!user_id){
            return response.json('Error');
        }
        const medicines = await database('medicine').select("*").where("user_id", Number(user_id));

        return response.json(medicines); 

    }
}

export { AllMedicineController };