//SIMPLIFICANDO O ARQUIVO APP.JS
var app = require('./config/express')();// o "./" significa que ele vai procurar este arquivo e diretório a partir da PASTA ATUAL
//o require está sendo dado num arquivo express.js que vai retornar a função de configuração (onde estará incluso o app.set.....)
//invocamos a função diretamente sem passar para uma variável e só depois invocar.


//Como estava antes:
//var express = require('express');
//var app = express();
//app.set('view engine','ejs');

app.get('/produtos', function(req,res){
res.render("produtos/lista"); 

}); 


app.listen(3000, function(){ 
	console.log("servidor rodando");
});