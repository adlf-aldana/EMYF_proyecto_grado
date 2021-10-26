
const jwt = require('jwt-simple');
const moment = require('moment-timezone');
const bo = moment().tz("America/La_Paz");
const { tokenKey } = require("./../../../config/tokenKey");

const {firebaseDatabase} = require('./../../../config/firebase');

const getDevice=(text)=>{
	let divtext = text.substr(text.indexOf("("));
	return divtext.substring(1,divtext.indexOf(")"));
}

const createToken = (userId,name)=>{
	const payload={
		userId,
		device: name,
		it: bo.unix()*1000,
		et: bo.add(2,"days").unix()*1000
	};
	return jwt.encode(payload,tokenKey);
}


const decodeToken = (token)=>{
	return jwt.decode(token,tokenKey);
}

const tokenTime=(et)=>{
	let dateNow = new Date(bo.unix()*1000).getTime();
	let expirationTime = new Date(et).getTime();

	return dateNow<=expirationTime?true:false;
}

const dataMatching = (id,device,token,callback)=>{
	// console.log(id,device,token," firebase");

	firebaseDatabase.ref('employees').child(id).child('devices').orderByChild("name").equalTo(device).once("value").then(snapshot=>{
		let number = Object.keys(snapshot.val()||{}).length;
		if(number>0){
			let key =  Object.keys(snapshot.val()||{})[0];
			// console.log(snapshot.val()[key].token,"firebase");
			let oldToken = snapshot.val()[key].token||"";

			if(oldToken===token){
				callback(true);
			}else{
				callback(false);
			}

		}else{
			callback(false);
		}
	});
}



const addTokenDatabase = (data,id_employeesApp) =>{
	firebaseDatabase.ref('employees').child(id_employeesApp).child('devices').push({
		...data 
	});
}

const updateTokenDatabase = (data,id_employeesApp,key) =>{
	firebaseDatabase.ref('employees').child(id_employeesApp).child('devices').child(key).update({
		...data 
	});
}

const tokenValidity = (id_employeesApp,name,callback) =>{

	let newToken = createToken(id_employeesApp,name);
	
	let data={
		name,
		token: newToken
	};

	// console.log(2);

	firebaseDatabase.ref('employees').child(id_employeesApp).child('devices').orderByChild("name").equalTo(name).once("value").then(snapshot=>{
		let number = Object.keys(snapshot.val()||{}).length;
		// console.log(1,snapshot.val());
		if(number>0){
			// console.log(3)
			let key =  Object.keys(snapshot.val()||{})[0];
			let oldToken = snapshot.val()[key].token||"";
			// console.log(4,oldToken);
			
			let { et } = decodeToken(oldToken);
			// console.log(5, et);


			// let dateNow = new Date(bo.unix()*1000).getTime();
			// let expirationTime = new Date(et).getTime();

			let validity = tokenTime(et);

			if(!validity){
				updateTokenDatabase(data,id_employeesApp,key);
				callback(data);
			}else{
				callback({
					name,
					token: oldToken
				})
			}
		}else{
			addTokenDatabase(data,id_employeesApp);
			callback(data);
		}
	});
};






module.exports = {
	getDevice,
	tokenValidity,
	decodeToken,
	tokenTime,
	dataMatching
}