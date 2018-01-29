
//DAO: DATA ACCESS OBJECT
function ProdutosDAO(connection){
	this._connection = connection; //a "_" na frente do nome da variável significa q essa variável é PRIVADA e deve ser utilizada apenas dentro dessa classe, porém isso é só um CONCEITO
}

ProdutosDAO.prototype.refresh = function(callback){
	this._connection.query('select * from pessoa', callback);
}

ProdutosDAO.prototype.salva = function(produto,callback){
	//this._connection.query('insert into ', callback);
	console.log('salvou');
	callback();
}

//ProdutosBanco é como se fosse uma classe
//Todas as classes no javascript tem uma propriedade chamada prototype na qual vc pode adicionar coisas na estrutura padrão dessa classe
//Estamos adicionando na estrutura da função ProdutosBanco o this.lista

module.exports = function(){
	return ProdutosDAO;
}