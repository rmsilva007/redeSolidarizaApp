const express = require('express');//importando o modulo express para a variavel q tera todas as funcionalidades do módulo
const cors = require('cors');
const routes = require('./routes');

const app = express();//instanciando a aplicação

app.use(cors());
app.use(express.json());//avisando o express para converter o json em um objeto javascript
app.use(routes);//importante que esteja aqui abaixo do express.json


app.listen(3333);//porta ouvinte das requisições