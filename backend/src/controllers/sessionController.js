//controller de login
const connection = require('../database/connections');
module.exports = {

    async create(request, response) {//ver se o caregiver existe para poder validar o login

        const { id } = request.body;

        const ong = await connection('myong')
            .where('id', id)
            .select('name')
            .first();

        if (!ong) {
            return response.status(400).json({error: 'No Carergiver found with this ID'});
        }

        return response.json(ong);
    
    }
}