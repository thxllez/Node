var dbConnection = require('../infra/connectionFactory');
module.exports = function(app){ //irá fornecer as rotas (caminhos para acessar a aplicação)
	
	app.get('/produtos', function(req,res){
		var connection = dbConnection();

		connection.query('select * from pessoa',function(err,results){ //passa como argumento a query e a função de callback (função que é chamada quando o resultado está pronto)
			//em geral funções de callback passam 2 argumentos: erro e o resultado
		res.render('produtos/lista',{lista:results}); //passamos aqui as variáveis que utilizaremos no arquivo ejs
		//neste caso estamos passando para o arquivo .ejs uma variável chamada lista que possui o results (a variável é passada via json)
		//a variável é automaticamente visível e utilizável no arquivo .ejs a partir daí
		});
		connection.end();
	}); 

}