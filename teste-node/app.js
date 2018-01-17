var express = require('express'); //este require invoca uma função do express
var app = express(); //estamos acionando a função que foi retornada. A variável app agora é o objeto do express.

app.get('/produtos', function(req,res){//atender requisições do tipo get, passando como parametro /produtos pois queremos atender o endereço /produtos
//passando também como argumento a função que recebe o request e o response como argumento.
res.send("<html><body><h1>CÓDIGO HTML</h2></body></html>"); //com o response conseguimos invocar um método send que envia uma resposta diretamente ao client

}); 


app.listen(3000, function(){ //passa como parametro o código da porta que o servidor vai escutar e uma função que será acionada assim que o servidor estiver pronto
	console.log("servidor rodando");
});