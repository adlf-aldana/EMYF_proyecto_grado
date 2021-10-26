const { ConnectionStart } = require('./../connection_db/connection_mysql');
const { v4: uuidv4 } = require('uuid');

class Login{

	constructor ( email ) {
		this.email = email;
	}


	isEmail = ()=>{
		return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test( this.email );
	}

	isEmployees = ( callback )=>{
		if ( !this.isEmail( this.email ) ) callback( undefined );

		const connectionStart = new ConnectionStart();
		const connect = connectionStart.getConnection();				
		const query = `call isEmployee("${this.email}");`;

		connect.query( query, (error, result, fields)=>{

			connectionStart.connectionClose();
			if (error) callback( undefined );
			console.log(result,"<-----");
			let queryResult = result[0].map(data=>{
				return {...data}
			});
			callback( queryResult[0] );
		});
	}
}


module.exports = { Login }