require('marko/node-require').install(); // configura marko para trabalhar com node
require('marko/express'); // conigurara marko a trabalhar com express

const express = require('express'); //importa o framework de rotas express
const app = express(); // o express retorna uma função por este motivo está send carregada esta função em app

const rotas = require('../app/rotas/rotas') // importa o módulo de rotas 
rotas(app); // empurra a constante app para dentro do módulo rotas

module.exports = app; // exporta a constant "app" para fora do módulo