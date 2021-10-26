const { ConnectionStart } = require('./../connection_db/connection_mysql');
const { v4: uuidv4 } = require('uuid');


class AccessLevel{

	add = ({name}, callback)=>{
		const connectionStart = new ConnectionStart();

		const newId = uuidv4();

		const connect = connectionStart.getConnection();

		const query = `insert into accessLevel( id, name)
					   values("${ newId }", "${ name }")`;
					   
		connect.query( query, (error, result, fields)=>{

			connectionStart.connectionClose();

			if (error) callback( undefined );
			
			callback( true );
		});	
	}


	update = ({ id, name}, callback)=>{
		const connectionStart = new ConnectionStart();

		const connect = connectionStart.getConnection();

		const query = `UPDATE accessLevel SET name="${ name }"
					   WHERE id = "${ id }"`;
					   
		connect.query( query, (error, result, fields)=>{

			connectionStart.connectionClose();

			if (error) callback( undefined );
			
			callback( true );
		});			
	}

	delete = (id, callback)=>{
		const connectionStart = new ConnectionStart();

		const connect = connectionStart.getConnection();

		const query = `DELETE FROM accessLevel WHERE id=${id}`;
					   
		connect.query( query, (error, result, fields)=>{

			connectionStart.connectionClose();

			if (error) callback( undefined );
			
			callback( true );
		});
	}



	list = ( callback )=>{
		const connectionStart = new ConnectionStart();

		const connect = connectionStart.getConnection();

		const query = `select * from accessLevel`;
					   
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

};


module.exports = { AccessLevel };