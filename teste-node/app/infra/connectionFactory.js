var mysql = require('mysql'); //vai importar o objeto que representa o driver do mysql
//FACTORY METHOD: função que isola a criação de um objeto  mais complexo
function createDBConnection(){
	return mysql.createConnection({
			host : 'localhost',
			user : 'adm',
			password : '224422',
			database : 'projeto1'
	});
}

//wrapper: uma função que embrulha outra função
module.exports = function(){
	return createDBConnection;
}