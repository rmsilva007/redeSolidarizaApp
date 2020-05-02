//controller para retornar casos específicos de uma ong
const connection = require('../database/connections');

module.exports  = {
    async index(request, response) {//listando os casos de uma myong específica
        const ong_id = request.headers.authorization;//começo acessando os dados da ong que esta logada
       
        const incidents = await connection('incidents')//buscando os incidents no banco
            .where('ong_id', ong_id)
            .select('*');
        
        return response.json(incidents);
    }
}