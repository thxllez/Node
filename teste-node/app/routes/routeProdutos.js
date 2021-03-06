module.exports = function(app){ //irá fornecer as rotas (caminhos para acessar a aplicação)
	
	app.get('/produtos', function(req,res){
		var connection = app.infra.connectionFactory();
		var produtosDAOAux = app.infra.ProdutosDAO; //essa forma de acessar a função só é possível em arquivos q tenham sido carregados pelo LOAD do express
		var produtosDAO = new produtosDAOAux(connection); //new para criar um novo contexto de uso
		//assim o 'this' do objeto referenciará apenas os this's definidos no objeto e nao no load por funções externas
		//por que fazemos isso?
		//quando temos um this dentro de uma função, a gente NUNCA SABE DE FATO QUEM SERÁ ESSE THIS (o que ele poderá representar)
		//sem o new ele representará varias coisas já carregadas anteriormente
		//com o new difiniremos um novo contexto, como se fosse um novo objeto, com o this sendo apenas aquilo q está definido lá dentro

		produtosDAO.refresh(function(err,results){ //passa como argumento a query e a função de callback (função que é chamada quando o resultado está pronto)
		//em geral funções de callback passam 2 argumentos: erro e o resultado
		if(err){
			console.log(err);
			res.send('ERRO - NÃO FOI POSSÍVEL CONECTAR COM O BANCO DE DADOS!');
		}else{
			res.render('produtos/lista',{lista:results}); //passamos aqui as variáveis que utilizaremos no arquivo ejs
			//neste caso estamos passando para o arquivo .ejs uma variável chamada lista que possui o results (a variável é passada via json)
			//a variável é automaticamente visível e utilizável no arquivo .ejs a partir daí
		}

		});
		connection.end();
	}); 

	app.get('/produtos/cadastro', function(req,res){
		res.render('produtos/cadProdutos',{errosValidacao: {}, produto: {}}); //passando um json vazio pois ele tenta ler esse json no arquivo ejs
	});

	app.post('/produtos', function(req,res){
		var connection = app.infra.connectionFactory();
		var produtosDAOAux = app.infra.ProdutosDAO; //essa forma de acessar a função só é possível em arquivos q tenham sido carregados pelo LOAD do express
		var produtosDAO = new produtosDAOAux(connection); //new para criar um novo contexto de uso

		var produto = req.body; //pegando o body da requisição (virá uma estrutura de dados no formato JSON)
		
		//o express-validator pega o request e adiciona funções dentro dele
		
		var validateTitulo = req.assert('titulo','Titulo é obrigatório!'); //passamos o id que representa o objeto e a mensagem de validação do mesmo, o req.assert retorna um objeto que contém essa validação.
		validateTitulo.notEmpty(); //estou dizendo para o objeto validador de titulo que não é pra aceitar o campo vazio
		req.assert('preco','Formato inválido!').isFloat(); //também pode invocar a função direto

		var validationErrors = req.validationErrors(); //retorna um json com os erros de validação

		if(validationErrors){ //se a variável estiver preenchida, é pq foram retornados erros de validação
			res.render('produtos/cadProdutos',{errosValidacao: validationErrors, produto: produto}); //passando json contendo informação dos erros de validação
			return; // return vazio para não continuar a executar o código abaixo, se der erro a execução para aqui.
		}

		produtosDAO.salva(produto, function(err,results){
			res.redirect('/produtos'); //redireciona para essa página após executar a função salvar - por padrão redireciona como GET
			//sempre que fizer um POST utilizar o redirect para se livrar do problema do F5
		});

		connection.end();
	});
}