const { ConnectionStart } = require('./../connection_db/connection_mysql');

const { v4: uuidv4 } = require('uuid');

class RequirementsEmployees{
	listRequirementsEmpl = (callback)=>{
		const connectionStart = new ConnectionStart();

		const connect = connectionStart.getConnection();

		const query = `select * from listRequerimentEmployees`;
		
		connect.query( query, (error, result, fields)=>{

			connectionStart.connectionClose();

			if (error) callback( undefined );

			let queryResult = result.map(data=>{
				return {...data}
			});
			callback( queryResult );
		});	
	}

	listCodeRequiEmpl = ( callback )=>{

		const connectionStart = new ConnectionStart();

		const connect = connectionStart.getConnection();

		const query = `SELECT * FROM listCodeRequiEmployees`;
		console.log("test");
		
		connect.query( query, (error, result, fields)=>{

			connectionStart.connectionClose();

			if (error) callback( undefined );

			let queryResult = result.map(data=>{
				return {...data}
			});
			callback( queryResult );
		});
	}

}
module.exports = { RequirementsEmployees }