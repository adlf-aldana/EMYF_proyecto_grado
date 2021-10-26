const { isCorrectHeaders } = require('./eventsMiddelware.js');

const {
	decodeToken,
	tokenTime,
	getDevice,
	dataMatching
} = require('../rest/api_v0.0.1/api/tokenEvents');

const GLOBAL_MIDDELWARE = ( req, res, next) =>{

	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, key, auth_token');
	res.setHeader('Access-Control-Allow-Credentials', true);
	res.setHeader('Access-Control-Max-Age', 86400);

	if (req.method === 'OPTIONS') {	  
	      res.end();
	} else {
	    console.log('No !OPTIONS');

		const { headers } = req;
		const _isCorrectHeaders = isCorrectHeaders( headers );

		if ( _isCorrectHeaders ) {
			next();
		}else{
			res.send({
				status: "Authentication error"
			})
		}

	}

}




const authToken = ( req,res,next )=>{
	let token = req.headers['auth_token']||"";

	// console.log(token," update");
	console.log("xd");

	if(token!==""){
		
		const {userId,et,device} =  decodeToken(token);
		const userDevice = getDevice(req.headers['user-agent']);
		const validate = tokenTime(et);	
		
		if(validate){

			dataMatching(userId,device,token,result=>{
				if(result){

					next();
				}else{

					res.send({
						status: "this token does not belong to this device",
						update: false
					})
				}
			});

		}else{

			res.send({
				status: "expired token",
				update: false
			})
		}

	}else{

		res.send({
			status: "expired token",
			update: false
		})
	}
};


module.exports = { GLOBAL_MIDDELWARE , authToken };