// Arquivo principal da aplicação backend

const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

// CORS permite acessar recursos externos
app.use(cors());

// Permite receber entradas em JSON
app.use(express.json());
app.use(routes);

// Respostas detalhadas em JSON dos erros da aplicação 
app.use(errors());

module.exports = app;