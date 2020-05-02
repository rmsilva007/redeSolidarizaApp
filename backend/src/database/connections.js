//arquivo de conexão com o banco de dados
const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);//este parametro é a configuração de conexão de desenvolvimento lá do arquivo package.json
module.exports = connection;//exportando a conexão