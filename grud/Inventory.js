const { ConnectionStart } = require('./../connection_db/connection_mysql');

const { v4: uuidv4 } = require('uuid');

class Inventory{

	getListMaterialOrden = ( callback )=>{
		// console.log(idEmail);
		const connectionStart = new ConnectionStart();

		const connect = connectionStart.getConnection();

		const query = `SELECT * FROM lisMaterialOrden`;
					   
		connect.query( query, (error, result, fields)=>{

			connectionStart.connectionClose();

			if (error) callback( undefined );
			
			let queryResult = result.map(data=>{
				return({...data});
			});			

			callback( queryResult );
		});		
	}
	
	add = ({newStock, idM }, callback)=>{
		// console.log('add');
		const connectionStart = new ConnectionStart();// instanciar una nueva conexion

		const newId = uuidv4();//nuevo id

		const connect = connectionStart.getConnection(); //iniciamos la conexion

		const query = `call addStock("${newId}",${newStock}, "${idM}");`;
		
		connect.query( query, (error, result, fields)=>{

			connectionStart.connectionClose();//apagamos la conexion a la base de datos mysql

			if (error) callback( undefined );

			let queryResult = result[0].map(data=>{
				return {...data}
			});
			callback( queryResult[0] );
		});	
	}

	

}

module.exports = { Inventory }