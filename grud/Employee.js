const { ConnectionStart } = require('./../connection_db/connection_mysql');

const { v4: uuidv4 } = require('uuid');

class Employees{
	
	add = ({ name, lastName, ci, id_email, id_accessLevel }, callback)=>{
		// console.log('add');
		const connectionStart = new ConnectionStart();// instanciar una nueva conexion

		const newId = uuidv4();//nuevo id

		const connect = connectionStart.getConnection(); //iniciamos la conexion

		const query = `call addEmployee("${ newId }", "${ name }", "${ lastName }", "${ ci }", "${ id_email }", "${ id_accessLevel }");`;
		
		connect.query( query, (error, result, fields)=>{

			connectionStart.connectionClose();//apagamos la conexion a la base de datos mysql

			if (error) callback( undefined );

			let queryResult = result[0].map(data=>{
				return {...data}
			});
			callback( queryResult[0] );
		});	
	}

	update = ({ id, name, lastName, ci }, callback)=>{
		const connectionStart = new ConnectionStart();

		const connect = connectionStart.getConnection();

		const query = `call updateEmployee("${ id }","${ name }","${lastName}","${ci}");`;
					   
		connect.query( query, (error, result, fields)=>{

			connectionStart.connectionClose();

			if (error) callback( undefined );
			
			callback( true );
		});			
	}

	delete = (id, callback)=>{
		const connectionStart = new ConnectionStart();

		const connect = connectionStart.getConnection();

		const query = `DELETE FROM employeesApp WHERE id=${id}`;
					   
		connect.query( query, (error, result, fields)=>{

			connectionStart.connectionClose();

			if (error) callback( undefined );
			
			callback( true );
		});
	}


	list = ( callback )=>{
		const connectionStart = new ConnectionStart();

		const connect = connectionStart.getConnection();

		const query = `select * from employeesApp`;
					   
		connect.query( query, (error, result, fields)=>{

			connectionStart.connectionClose();

			if (error) callback( undefined );

			let queryResult = result.map(data=>{
				return({
					...data
				});
			});			
			callback( queryResult );
		});	
	}


	infoEmployee = ( idEmail, callback )=>{
		// console.log(idEmail);
		const connectionStart = new ConnectionStart();

		const connect = connectionStart.getConnection();

		const query = `SELECT * FROM infoEmployee
					   WHERE idEmail = "${ idEmail }"`;
					   
		connect.query( query, (error, result, fields)=>{

			connectionStart.connectionClose();

			if (error) callback( undefined );
			
			let queryResult = result.map(data=>{
				return({...data});
			});			

			// console.log(queryResult);

			callback( queryResult );
		});		
	}
	
	getListEmployees = ( callback )=>{
		// console.log(idEmail);
		const connectionStart = new ConnectionStart();

		const connect = connectionStart.getConnection();

		const query = `SELECT * FROM listEmployees`;
					   
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

module.exports = { Employees }