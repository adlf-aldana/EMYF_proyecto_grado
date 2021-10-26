const { ReportInventory } = require('./../../../grud/ReportInventory');

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { getDevice, tokenValidity } = require("./tokenEvents");
const { authToken } = require('./../../../middelwares/middelware');


app.use(bodyParser.json());


app.get("/getListMaterial",authToken,(req, res)=>{
	
	const connect = new ReportInventory();
	

	connect.getListMaterial((data)=>{
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

app.get("/getListIncome",authToken,(req, res)=>{
	
	const connect = new ReportInventory();
	

	connect.getListIncome((data)=>{
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

app.get("/getListEgress",authToken,(req, res)=>{
	
	const connect = new ReportInventory();
	

	connect.getListEgress((data)=>{
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
exports.reportApp = app;