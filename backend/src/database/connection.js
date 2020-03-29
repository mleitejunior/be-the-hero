// Configuração do banco de dados

// Construtor de Querys do nosso  MySQLite
const knex = require('knex');

const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;