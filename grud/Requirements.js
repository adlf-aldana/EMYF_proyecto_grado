const { ConnectionStart } = require('./../connection_db/connection_mysql');

const { v4: uuidv4 } = require('uuid');

class Requirements{

	listAllRequirements = (callback)=>{
		const connectionStart = new ConnectionStart();

		const connect = connectionStart.getConnection();

		const query = `select * from listRequirements`;
		
		connect.query( query, (error, result, fields)=>{

			connectionStart.connectionClose();

			if (error) callback( undefined );

			let queryResult = result.map(data=>{
				return {...data}
			});
			callback( queryResult );
		});	
	}



	getRequirement = (code,callback)=>{
		const connectionStart = new ConnectionStart();

		const connect = connectionStart.getConnection();

		const query = `select * from listRequirements where code = '${code}';`;
		
		connect.query( query, (error, result, fields)=>{

			connectionStart.connectionClose();

			if (error) callback( undefined );

			let queryResult = result.map(data=>{
				return {...data}
			});
			callback( queryResult );
		});	
	}


	listRequirementsCurrent = (callback)=>{
		const connectionStart = new ConnectionStart();

		const connect = connectionStart.getConnection();

		const query = `SELECT * FROM listRequirementsCurrent`;
		
		connect.query( query, (error, result, fields)=>{

			connectionStart.connectionClose();

			if (error) callback( undefined );

			let queryResult = result.map(data=>{
				return {...data}
			});
			callback( queryResult );
		});	
	}

	listCodeRequirements = ( callback )=>{

		const connectionStart = new ConnectionStart();

		const connect = connectionStart.getConnection();

		const query = `SELECT * FROM listCodeRequirements`;
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

module.exports = { Requirements }