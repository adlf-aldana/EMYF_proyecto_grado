const { Employees } = require('./../../../grud/Employee');

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { getDevice, tokenValidity } = require("./tokenEvents");

const { authToken } = require('./../../../middelwares/middelware');

// console.log(authToken);

app.use(bodyParser.json());

app.post("/add", (req,res) => {
	const { name, lastName, ci, id_email, id_accessLevel } = req.body;

	const connect = new Employees();
	
	connect.add( { name, lastName, ci, id_email, id_accessLevel } ,resultQuery =>{

		if( resultQuery !== undefined ){
			tokenValidity(resultQuery.id, getDevice(req.headers['user-agent']),({token,name})=>{ 
				res.json({
					status: 200,
					dataEmployee: resultQuery||{},
					deviceName: name,
					token
				});			
			});
		}else{
			res.json({
				status: "Access denied error"
			});
		}
	});
});



app.post("/update",authToken,(req, res)=>{
	console.log('update',req.headers);
	const { id, name, lastName, ci } = req.body;
	const connect = new Employees();

	connect.update({ id, name, lastName, ci}, (result)=>{
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


app.get("/getListEmployees",authToken,(req, res)=>{
	
	const connect = new Employees();
	

	connect.getListEmployees((data)=>{
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

exports.employeeApp = app;