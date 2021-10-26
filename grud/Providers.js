const { ConnectionStart } = require('./../connection_db/connection_mysql');

const { v4: uuidv4 } = require('uuid');

class Providers{
	
	getListProviders = ( callback )=>{
		// console.log(idEmail);
		const connectionStart = new ConnectionStart();

		const connect = connectionStart.getConnection();

		const query = `SELECT * FROM listProviders`;
					   
		connect.query( query, (error, result, fields)=>{

			connectionStart.connectionClose();

			if (error) callback( undefined );
			
			let queryResult = result.map(data=>{
				return({...data});
			});			

			callback( queryResult );
		});		
	}

	updateProviders = ({ id, name, address, phone, mobile, email, description }, callback)=>{
		const connectionStart = new ConnectionStart();

		const connect = connectionStart.getConnection();

		const query = `call updateProviders("${ id }","${ name }","${address}","${phone}","${mobile}","${email}","${description}");`;
					   
		connect.query( query, (error, result, fields)=>{

			connectionStart.connectionClose();

			if (error) callback( undefined );
			
			callback( true );
		});			
	}
}
module.exports = { Providers }