
const mysql = require('mysql');
const { mysqlConfig } = require('./../config/db_mysql');

class ConnectionStart{

	constructor(){
		this.connection = mysql.createConnection( mysqlConfig );
		this.connection.connect()
	}

	getConnection(){
		return this.connection;
	}

	connectionClose(){
		this.connection.end();
	}

}

module.exports = { ConnectionStart }