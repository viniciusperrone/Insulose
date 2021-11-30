import { Request, Response } from 'express';

import database from '../../../../shared/infra/database/connection';

class MedicineController {
    async create(request: Request, response: Response) {
        const {
            name_medicine,
            hours_medicine,
            quantity_medicine,
            times_day,
            user_id
        } = request.body;

        const medicine = {
            name_medicine: name_medicine,
            hours_medicine: hours_medicine,
            quantity_medicine: quantity_medicine,
            times_day: times_day,
            user_id: user_id,
        }

        const register = await database('medicine').insert(medicine);

        const id_medicine = register[0];

        return response.json({
            id_medicine,
            ...medicine
        });
    }
}

export { MedicineController };