var mysql = require('mysql');

function createDbConnection(){
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '',
		database : 'node-curso-alura-1'
	});
}

module.exports = function(){
	return createDbConnection;
}