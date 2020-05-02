const connection = require('../database/connections');

module.exports = {
    async index(request, response) {
        const {page = 1 } = request.query;//query: query params que podem ser enviados usando ?
        const [count] = await connection('incidents').count();
       
        const incidents = await connection('incidents')
        .join('myong', 'myong.id', '=', 'incidents.ong_id')//join de tabelas myong com incidents para completar a listagem de casos 
        .limit(5)//retorno será de apenas 5 registros de casos
        .offset((page -1) * 5)//page começando com 1 no primeiro de 0 até 4 totalizando 5 registros
        .select(['incidents.*',
        'myong.name',
        'myong.email',
        'myong.whatsapp',
        'myong.city',
        'myong.uf'
        ]);
        
        response.header('X-Total-Count', count['count(*)']);//mandando o total de incidents(casos) no header da requisiçao
        
        
        return response.json(incidents);
    },


    async create (request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;          //headers = cabeçario que é acessado através do request.headers que 
                                                             //é onde fica as afirmações do contexto da requisição com dados do usuário
                                                             //como  autenticação,localização, idioma etc
        const [id] = await connection ('incidents').insert({//o primeiro valor desse array será armazenado em uma variável id;

            title,
            description,
            value,
            ong_id,

        });  
        
        return response.json({ id });
    },

    async delete(request, response) {
        const  { id } = request.params;//id que vem lá do request.params
        const ong_id = request.headers.authorization;//é preciso verificar se o dono do myong é a mesma pessoa que esta deletando a mesma
        
        const incident = await connection('incidents')
            .where('id', id)//verificando se o id do params é igual ao id do caso
            .select('ong_id')//selecionando apenas a coluna id
            .first();

            if(incident.ong_id != ong_id) {

                return response.status(401).json({error: 'Operation not permitted.'});//mandando uma resposta tipo json para a unauthorized request

            }

           
            await connection('incidents').where('id', id).delete();

            return response.status(204).send();//.send() = resposta sem corpo, ou seja,  de sucesso mas sem conteúdo para retornar

    }

};