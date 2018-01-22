module.exports = function(app){ //irá fornecer as rotas (caminhos para acessar a aplicação)
	app.get('/produtos', function(req,res){

		//O CÓDIGO ABAIXO SERÁ ISOLADO FUTURAMENTE
		var mysql = require('mysql'); //vai importar o objeto que representa o driver do mysql
		var connection = mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : '',
			databse : 'casadocodigo',
		});

		connection.query('select * from livros',function(err,results){ //passa como argumento a query e a função de callback (função que é chamada quando o resultado está pronto)
			//em geral funções de callback passam 2 argumentos: erro e o resultado
			res.send(results);
		});
		connection.end();


		//res.render("produtos/lista"); 
	}); 
}