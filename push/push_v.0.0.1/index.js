const express = require('express');

const webPush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const { firebaseDatabase } = require('./../../config/firebase');

const { push_keys } = require('./../../config/push_keys');
const { PUBLIC_VAPID_KEY, PRIVATE_VAPID_KEY } = push_keys; 


const { SubscriptionsNotification } = require('./../../grud/SubscriptionsNotification');

app.use(bodyParser.json());

const publicVapidKey = PUBLIC_VAPID_KEY;
const privateVapidKey = PRIVATE_VAPID_KEY;

webPush.setVapidDetails(
	"mailto:test@example.com",
	publicVapidKey,
	privateVapidKey,
);

app.post("/subscribe", (req, res) => {
	const { subscription, id_employeesApp } = req.body;

	const subscriptionsNotification = new SubscriptionsNotification();

	subscriptionsNotification.listSubscriptionEmployee( id_employeesApp, ( result )=>{

		if( result !== undefined ){

			const isSubscription = result.find(
				(x) => subscription.keys.auth === x.dataSubscription.keys.auth
			);

			if (!isSubscription) {
				subscriptionsNotification.add({

					id_employeesApp,
					dataSubscription: JSON.stringify(subscription)

				},( addResult )=>{
					if( addResult !== undefined ){
						res.send({
							status: 200,
							idSubscribe: addResult
						});
					}else{
						res.send({
							status: "error 1"
						});
					}
				});
			}else{
				res.send({
					status: "existing subscription"
				});
			}
		}else{
			res.send({
				status: "error 2"
			});
		}

	});
});


app.post("/notification", (req, res) => {
	const { 
		id_employeesApp,
		message,
		url
	} = req.body;

	firebaseDatabase.ref('employees').child(id_employeesApp).child('notifications').push({
		description: message,
		title: "notificacion de prueba",
		url,
		timeStamp: +new Date,
		viewed:false
	});

	const subscriptionsNotification = new SubscriptionsNotification();

	const payload = (name) => JSON.stringify({
									title: `hola ${name}`,
									message,
									url
							  });

	

	subscriptionsNotification.listSubscriptionEmployee( id_employeesApp, ( result )=>{
		if( result !== undefined ){
			result.forEach(({ dataSubscription, name, lastName })=>{				
				webPush
					.sendNotification( dataSubscription, payload( `${name} ${lastName}` ))
					.catch((error) => console.error(error));
			});
			res.send({status: 200});
		}else{
			res.send({
				status: "error"
			});
		}
	});
	

});	


app.post("/unSubscribe", (req, res) => {
	const { idSubscribe } = req.body;
	const subscriptionsNotification = new SubscriptionsNotification();
	subscriptionsNotification.delete( idSubscribe, ( result )=>{
		if( result !== undefined ){

			res.send({
				status: 200
			});
			
		}else{
			res.send({
				status: "error 2"
			});
		}

	});
});






exports.appPushNotification = app;