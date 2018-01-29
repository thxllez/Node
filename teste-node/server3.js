//SIMPLIFICAÇÃO DO server2.js
var app = require('./app/config/express')();
//var rotasProdutos = require('./app/routes/routes')(app); //carrega o modulo referente as rotas
//OBS: foi definido que tudo referente ao app, ficará dentro da pasta app, as rotas, as views, etc.
app.listen(3000, function(){ 
	console.log("servidor rodando");
});