var express = require('express');
var load = require('express-load'); //carregar a biblioteca express-load
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function() { //quando alguém der o require chama esse module retornando a variavel app
	var app = express();
	app.set('view engine','ejs');
	app.set('views','./app/views'); //mostrando ao express ONDE ESTÁ A PASTA VIEWS CONTENDO AS VIEWS DO APP
	//obs:'./' a partir de onde vai ser executado o servidor (arquivo server3.js) - a partir dali comece a buscar a pasta app e views em seguida
	
	app.use(bodyParser.urlencoded({extended: true})); //definindo que usaremos o bodyparser
	//extended é uma propriedade para o bodyParser poder interpretar formulários mais complexos
	app.use(expressValidator()); //invoca o express validator

	load('routes',{cwd: 'app'}).then('infra').into(app); //invocamos o objeto do load e estamos falando que tudo que for carregado automaticamente ficará dentro do nosso objeto app
	//nela linha de código estamos falando:
	//Node, carregue tudo que estiver em routes, depois tudo que estiver em infra, dentro do objeto app
	//passamos um json informando a pasta a partir de onde ele deve procurar routes e infra, pra ele nao precisar procurar no projeto inteiro
	//a variavel cwd guarda essa informação

	return app;
}