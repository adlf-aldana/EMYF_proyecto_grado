const { ConnectionStart } = require('./../connection_db/connection_mysql');
const { v4: uuidv4 } = require('uuid');

class Email{

	constructor( email ){
		this.email = email;
	}


	addEmail = ( callback )=>{
		const connectionStart = new ConnectionStart();

		const newId = uuidv4();

		const connect = connectionStart.getConnection();

		const query = `insert into authorizedEmails( id, email, state)
					   values("${ newId }","${ this.email }", 1)`;
					   
		connect.query( query, (error, result, fields)=>{

			connectionStart.connectionClose();

			if (error) callback( undefined );
			
			callback( true );
		});	
	}

	updateState = ( { id, state } ,callback )=>{
		const connectionStart = new ConnectionStart();

		const connect = connectionStart.getConnection();

		const query = `UPDATE authorizedEmails SET state=${ state?1:0 } 
					   WHERE id = "${ id }"`;
					   
		connect.query( query, (error, result, fields)=>{

			connectionStart.connectionClose();

			if (error) callback( undefined );
			
			callback( true );
		});	
	}


	updateEmail = ( { id, newEmail } ,callback )=>{
		const connectionStart = new ConnectionStart();

		const connect = connectionStart.getConnection();

		const query = `UPDATE authorizedEmails SET email="${ newEmail }"
					   WHERE id = "${ id }"`;
					   
		connect.query( query, (error, result, fields)=>{

			connectionStart.connectionClose();

			if (error) callback( undefined );
			
			callback( true );
		});
	}

	deleteEmail = ( id, callback)=>{
		const connectionStart = new ConnectionStart();

		const connect = connectionStart.getConnection();

		const query = `DELETE FROM authorizedEmails WHERE id=${id}`;
					   
		connect.query( query, (error, result, fields)=>{

			connectionStart.connectionClose();

			if (error) callback( undefined );
			
			callback( true );
		});
		
	}
}


module.exports = { Email }