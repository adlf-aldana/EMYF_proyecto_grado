const { RequirementsEmployees } = require('./../../../grud/RequirementsEmployees');

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const { authToken } = require('./../../../middelwares/middelware');

app.use(bodyParser.json());


app.get("/listReqEmployees",authToken,(req, res)=>{

	const connect = new RequirementsEmployees();

	connect.listRequirementsEmpl((data)=>{
		// console.log(data);
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

app.get("/getListCodeRequiEmployees",authToken,(req, res)=>{
	console.log('test');
	const connect = new Requirements();

	connect.listCodeRequiEmpl( (data)=>{
		console.log(data,"<---");
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

exports.requirementsEmployees = app;