import { Request, Response } from 'express';

import database from '../../../../shared/infra/database/connection';

class SnackController {
    async create(request: Request, response: Response) {
        const {
            name_snack,
            quantity_snack,
            calorie,
            drink,
            user_id
        } = request.body;

        const snack = {
            name_snack: name_snack,
            quantity_snack: quantity_snack,
            calorie: calorie,
            drink: drink,
            user_id: user_id,
        }

        const register = await database('snack').insert(snack);

        const id_snack = register[0];

        return response.json({
            id_snack,
            ...snack
        });
    }
}

export { SnackController };