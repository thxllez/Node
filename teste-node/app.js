var express = require('express'); //este require invoca uma função do express
var app = express(); //estamos acionando a função que foi retornada. A variável app agora é o objeto do express.

app.set('view engine','ejs'); //set para definir variáveis pra dentro do express (que passem pelo sistema inteiro)
//neste comando estamos especificando para o express qual a engine de view dinamica estamos utilizando

app.get('/produtos', function(req,res){//atender requisições do tipo get, passando como parametro /produtos pois queremos atender o endereço /produtos
//passando também como argumento a função que recebe o request e o response como argumento.
//res.send("<html><body><h1>CÓDIGO HTML</h2></body></html>"); com o response conseguimos invocar um método send que envia uma resposta diretamente ao client
res.render("produtos/lista"); //passa no render o endereço dentro do nosso diretório que terá a página que queremos renderizar
//o ejs busca as views dentro do diretório chamado views a partir da raíz da nossa aplicação
//então é necessário criar este diretório e colocar dentro dele as views (páginas que serão renderizadas)

// ** RESUMO DO CÓDIGO ATÉ AQUI: quando o client chamar pela url /produtos será renderizado o arquivo lista.ejs dentro da pasta produtos no diretório views.

}); 


app.listen(3000, function(){ //passa como parametro o código da porta que o servidor vai escutar e uma função que será acionada assim que o servidor estiver pronto
	console.log("servidor rodando");
});