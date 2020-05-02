//tratando as rotas do App
const express = require('express');
const myongController = require('./controllers/myongController');//importando os controllers
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');


const routes = express.Router();//acoplando o módulo de rotas em uma variável

routes.post('/sessions', sessionController.create)

routes.get('/myong', myongController.index); 
routes.post('/myong', myongController.create);

routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.index);
routes.delete('/incidents/:id', incidentController.delete);//como é necessário saber qual caso a pessoa quer deletar então recebremos um rout params com o caso que será deletado

routes.get('/profile', profileController.index );



module.exports = routes; //exportando a variavel 