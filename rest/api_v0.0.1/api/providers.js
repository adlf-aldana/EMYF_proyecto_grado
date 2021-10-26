const { Providers } = require('./../../../grud/Providers');

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { getDevice, tokenValidity } = require("./tokenEvents");

const { authToken } = require('./../../../middelwares/middelware');

// console.log(authToken);

app.use(bodyParser.json());

app.get("/getListProviders",authToken,(req, res)=>{
	
	const connect = new Providers();
	

	connect.getListProviders((data)=>{
		console.log(data);
		if(data){
			res.send({
				status: 200,
				data 
			});
		}else{
			res.send({
				status: 300
			});
		}
	});
});

app.post("/updateProviders",authToken,(req, res)=>{
	console.log('updateProviders',req.headers);
	const { id, name, address, phone, mobile, email, description } = req.body;
	const connect = new Providers();

	connect.updateProviders({ id, name, address, phone, mobile, email, description}, (result)=>{
		console.log(result,"<<----");
		if(result){
			console.log(1);
			return res.send({
				status: 200,
				update: true
			});
		}else{
			console.log(2);
			return res.send({
				status: 300,
				update: false
			});
		}
	});

});
exports.providersApp = app;