const { Requirements } = require('./../../../grud/Requirements');

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const { authToken } = require('./../../../middelwares/middelware');


app.use(bodyParser.json());



app.get("/listAll",authToken,(req, res)=>{

	const connect = new Requirements();

	connect.listAllRequirements((data)=>{
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

app.get("/listCurrent",authToken,(req, res)=>{

	const connect = new Requirements();

	connect.listRequirementsCurrent((data)=>{
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

app.get("/getListCodeRequirements",authToken,(req, res)=>{
	console.log('test');
	const connect = new Requirements();

	connect.listCodeRequirements( (data)=>{
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


app.get("/getRequirement/:id",authToken,(req, res)=>{
	const { id } = req.params;
	const connect = new Requirements();
	console.log( id );

	connect.getRequirement(id,(data)=>{
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





// listRequirementsCurrent

exports.requirements = app;