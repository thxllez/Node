var express = require('express');
var app = express();
app.set('view engine','ejs');
app.set('views','./app/views'); //mostrando ao express ONDE ESTÁ A PASTA VIEWS CONTENDO AS VIEWS DO APP
//obs:'./' a partir de onde vai ser executado o servidor (arquivo server3.js) - a partir dali comece a buscar a pasta app e views em seguida
module.exports = function() { //quando alguém der o require chama esse module retornando a variavel app
	return app;
}