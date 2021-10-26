const { Login } = require('./../../../grud/Login');

const express = require("express");

const app = express();

const { getDevice, tokenValidity } = require("./tokenEvents");



app.get("/isEmployees/:email", (req,res) => {

	const { email } = req.params;
	const connect = new Login( email );

	connect.isEmployees( resultQuery =>{
		if( resultQuery !== undefined && resultQuery.isEmployee){
			console.log(resultQuery.id);
			tokenValidity(resultQuery.id, getDevice(req.headers['user-agent']),({token,name})=>{ 

				console.log({
					...resultQuery,
					deviceName: name,
					token,
					status: "ok"
				});

				res.json({
					...resultQuery,
					deviceName: name,
					token,
					status: "ok"
				});
			});

		}else{
			res.json({
				status: "Access denied error"
			});
		}
	
	});
});

exports.loginApp = app;