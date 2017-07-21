
module.exports = function(app){
	app.get('/produtos', function(req,res){

		var connnection = app.infra.connectionFactory();

		connnection.query('select * from produtos', function(err,result){
			res.render('produtos/lista',{lista:result});
			//res.send(result);
		});
		
		connnection.end();
		//res.render("produtos/lista");
	});
}