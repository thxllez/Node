var mysql = require('mysql'); //vai importar o objeto que representa o driver do mysql
//FACTORY METHOD: função que isola a criação de um objeto  mais complexo
module.exports = function(){
	return mysql.createConnection({
			host : 'localhost',
			user : 'adm',
			password : '224422',
			database : 'projeto1'
	});
}