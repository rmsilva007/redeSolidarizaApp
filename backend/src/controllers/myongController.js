
const crypto = require('crypto');//pacote node c/ métodos de cryptografia 
const connection = require('../database/connections');

module.exports = {
   
    async index(request, response)  {//método p/ listar todas as myongs
        const myong = await connection('myong').select('*');
        return response.json(myong);
    },

    async create(request, response) {

        const { name, email, whatsapp, city, uf } = request.body;//pegando o corpo da requisição que é onde os dados postados estão armazenados
        const id = crypto.randomBytes(4).toString('HEX');//gerando id c/ quatro bytes de caracteres e convertendo p/ string hexadecimal
        
        await connection('myong').insert({//método p/ preenchimento  do cadastro //await: vai aguardar este código finalizar p/ então retornar um id 
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        
        return response.json ({ id });//após cadastro devolve-se o id para o cliente
   }
};