const { Inventory } = require('./../../../grud/Inventory');

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { getDevice, tokenValidity } = require("./tokenEvents");

const { authToken } = require('./../../../middelwares/middelware');

// console.log(authToken);

app.use(bodyParser.json());


app.get("/getListMaterialOrden",authToken,(req, res)=>{
	
	const connect = new Inventory();
	

	connect.getListMaterialOrden((data)=>{
		//console.log(data);
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

app.post("/add", (req,res) => {
	const { myId ,newStock, idM } = req.body;

	const connect = new Inventory();
	
	connect.add( { newStock, idM } ,resultQuery =>{

		if( resultQuery !== undefined ){
			tokenValidity(myId, getDevice(req.headers['user-agent']),({token,name})=>{ 
				res.json({
					status: 200,
					dataInventory: resultQuery||{},
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

exports.inventory = app;