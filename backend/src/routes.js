//tratando as rotas do App
const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');//Segments são todos os tipos de segmentos que temos em uma requisição [params, headers, query, cookies, signedCookies, body]
const myongController = require('./controllers/MyongController');//importando os controllers
const incidentController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');


const routes = express.Router();//acoplando o módulo de rotas em uma variável

routes.post('/sessions', sessionController.create);//validar se o login esta sendo enviado


routes.get('/myong', myongController.index); 
routes.post('/myong', celebrate({//validando os dados
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),//required = propriedade obrigatória
        email: Joi.string().required().email(),//verifica se o email tem arroba e termina com ponto alguma coisa
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), myongController.create);//No express as coisas funcionam de forma sincrona até o usuário obter a resposta
                           //Portanto deve-se colocar a validação = celebrate() antes de se criar uma personalOng 

routes.post('/incidents', incidentController.create);//validação dos incidents: header precisa ter autorização e validação do corpo

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), incidentController.index);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys().keys({
        id: Joi.number().required(),
    })
}), incidentController.delete);//como é necessário saber qual caso a pessoa quer deletar então recebremos um rout params com o caso que será deletado


routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),//propriedades abstraídas que podem vir com os headers que eu  posso não estar ciente 
    }), profileController.index);



module.exports = routes; //exportando a variavel 