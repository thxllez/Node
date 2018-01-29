module.exports = function(app){
	
	app.get('/teste', function(req,res){
		res.send('TESTE-ROTAS');
	}); 

}