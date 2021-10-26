const { ConnectionStart } = require('./../connection_db/connection_mysql');

const { v4: uuidv4 } = require('uuid');


class ReportInventory{

	getListMaterial = ( callback )=>{
		// console.log(idEmail);
		const connectionStart = new ConnectionStart();

		const connect = connectionStart.getConnection();

		const query = `SELECT * FROM listMaterialRep`;
					   
		connect.query( query, (error, result, fields)=>{

			connectionStart.connectionClose();

			if (error) callback( undefined );
			
			let queryResult = result.map(data=>{
				return({...data});
			});			

			callback( queryResult );
		});		
	}

	getListIncome = ( callback )=>{
		// console.log(idEmail);
		const connectionStart = new ConnectionStart();

		const connect = connectionStart.getConnection();

		const query = `SELECT * FROM listIncome`;
					   
		connect.query( query, (error, result, fields)=>{

			connectionStart.connectionClose();

			if (error) callback( undefined );
			
			let queryResult = result.map(data=>{
				return({...data});
			});			

			callback( queryResult );
		});		
	}


	getListEgress = ( callback )=>{
		// console.log(idEmail);
		const connectionStart = new ConnectionStart();

		const connect = connectionStart.getConnection();

		const query = `SELECT * FROM listEgress`;
					   
		connect.query( query, (error, result, fields)=>{

			connectionStart.connectionClose();

			if (error) callback( undefined );
			
			let queryResult = result.map(data=>{
				return({...data});
			});			

			callback( queryResult );
		});		
	}
	
}

module.exports = { ReportInventory }
