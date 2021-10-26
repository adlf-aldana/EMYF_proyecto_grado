const { ConnectionStart } = require('./../connection_db/connection_mysql');

const { v4: uuidv4 } = require('uuid');


class SubscriptionsNotification{
	
	add = ({ id_employeesApp, dataSubscription }, callback )=>{
		const connectionStart = new ConnectionStart();

		const newId = uuidv4();

		const connect = connectionStart.getConnection();

		// console.log(newId, dataSubscription, id_employeesApp);

		const query = `insert into subscriptionsNotification( id, dataSubscription, id_employeesApp)
					   values("${ newId }", '${ dataSubscription }', "${ id_employeesApp }")`;
					   
		connect.query( query, (error, result, fields)=>{
			// console.log(result);
			connectionStart.connectionClose();
			console.log(error);

			if (error) callback( undefined );
			
			callback( newId );
		});	
	}

	update = ({ id, dataSubscription }, callback )=>{
		const connectionStart = new ConnectionStart();

		const connect = connectionStart.getConnection();

		const query = `UPDATE subscriptionsNotification SET dataSubscription="${ dataSubscription }"
					   WHERE id = "${ id }"`;
					   
		connect.query( query, (error, result, fields)=>{

			connectionStart.connectionClose();

			if (error) callback( undefined );
			
			callback( true );
		});	
	}

	delete = ( id, callback)=>{
		const connectionStart = new ConnectionStart();

		const connect = connectionStart.getConnection();

		const query = `DELETE FROM subscriptionsNotification WHERE id="${id}"`;
					   
		connect.query( query, (error, result, fields)=>{

			connectionStart.connectionClose();

			if (error) callback( undefined );
			
			callback( true );
		});
	}

	listSubscriptionEmployee = ( id_empleesApp, callback )=>{
		const connectionStart = new ConnectionStart();

		const connect = connectionStart.getConnection();

		const query = `select sn.id, sn.id_employeesApp, sn.dataSubscription, ea.name, ea.lastName from subscriptionsNotification as sn
					   inner join employeesApp as ea
					   where sn.id_employeesApp=ea.id and sn.id_employeesApp = "${ id_empleesApp }"`;
					   
		connect.query( query, (error, result, fields)=>{

			connectionStart.connectionClose();

			if (error) callback( undefined );

			let queryResult = result.map(data=>{
				return({
					id: data.id,
					dataSubscription: JSON.parse(`${data.dataSubscription}`),
					id_employeesApp: data.id_employeesApp,
					name: data.name,
					lastName: data.lastName
				});
			});	
			callback( queryResult );
		});
	}


	list = ( callback )=>{
		const connectionStart = new ConnectionStart();

		const connect = connectionStart.getConnection();

		const query = `select * from subscriptionsNotification`;
					   
		connect.query( query, (error, result, fields)=>{

			connectionStart.connectionClose();

			if (error) callback( undefined );

			let queryResult = result.map(data=>{
				return({
					id: data.id,
					dataSubscription: JSON.parse(data.dataSubscription),
					id_employeesApp: data.id_employeesApp
				});
			});			
			callback( queryResult );
		});
	}



};

module.exports = { SubscriptionsNotification };