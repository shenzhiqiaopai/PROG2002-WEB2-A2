/*
*Used to create a database connection
*
*/
var dbDetails = require("./db-details");
var mysql = require('mysql2');
var bodyParser = require('body-parser');
var http = require('http');//Import required modules

//Creates a connection to a MySQL database. This function requires information such as host, user, password, and database
module.exports = {
	getconnection: ()=>{
	return mysql.createConnection({
		host:dbDetails.host,
		user:dbDetails.user,
		password:dbDetails.password,
		database:dbDetails.database	
	});
}
}