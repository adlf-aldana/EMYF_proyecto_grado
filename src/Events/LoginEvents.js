import configFirebase from './../config/firebase';
import { 
	isEmployees,
	addEmployee
} from './../apiRest/requests';


import userDefaultImage from './../sources/images/userDefault.png';

import fire from './../config/firebase';

const { app } = configFirebase;




export const remoteCloseSession = (closeSession, callback)=>{
	if(localStorage.session){
		const {idEmployee,token} = JSON.parse(localStorage.session);
		// console.log(idEmployee,token);

		let observerCloseSession= fire.database.ref("employees").child( idEmployee ).child("devices").orderByChild("token").equalTo(token).on("value",(snapshot)=>{
			try{
				let number = Object.keys(snapshot.val()||{}).length;
				if(number<=0){
					closeSession();
				}
			}catch(e){
				// console.log("xd5");
			}
		});

		callback(observerCloseSession)
	}
}


export const signInLoginState = (prevCallback , callback, callbackObserver) => {

	let observerAuthState = app.auth().onAuthStateChanged( result => { 
		try{
			prevCallback();

		    if (result) { 

				const { email, displayName, photoURL, uid} = result;

				const dataEmail = { email, displayName, photoURL, uid};
			
				isEmployees( email, ({ data })=>{
					// console.log(data,"<----");
					if(data.status !== "Access denied error"){
						const {
							idEmail,
						    state,
						    email,
						    id,
						    name,
						    lastName,
						    ci,
						    id_accessLevel,
						    nameAccessLevel,
						    deviceName,
						    token,
						    optionsAccess
						} = data;

						if(id!==""){

							localStorage.session=JSON.stringify({
									email,
									displayName: name,
									photoURL: photoURL || userDefaultImage,
									lastName,
									ci,
									uid,
									idEmail,
									idEmployee: id,
									nameAccessLevel,
									state,
									id_accessLevel,
									titlePage:"E.M.Y.F",
									deviceName,
									token,
									optionsAccess
								});

							sessionStorage.verify=JSON.stringify({
								state:false
							});
							callback( true, dataEmail );

						}else{

							let nameComplete = displayName !==null ? displayName.split(" "): null;

							addEmployee({
								name: nameComplete !== null ? nameComplete[0] : "vacio",
								lastName: nameComplete !== null ? nameComplete[1] !== undefined ? nameComplete[1]: "vacio":"vacio",
								ci:"vacio",
								id_email:idEmail,
								id_accessLevel: "12dasdasd"//testing default
							},(response)=>{
								if(data.status !== "Access denied error"){

									const { dataEmployee, deviceName, token } = response.data;
									const { 
										ci,
										email,
										id,
										idEmail,
										id_accessLevel,
										lastName, 
										name,
										nameAccessLevel,
										state,
										optionsAccess
									} = dataEmployee;

									localStorage.session=JSON.stringify({
										email,
										displayName: name,
										photoURL: photoURL || userDefaultImage,
										lastName,
										ci,
										uid,
										idEmail,
										idEmployee: id,
										nameAccessLevel,
										state,
										id_accessLevel,
										titlePage:"E.M.Y.F",
										deviceName,
										token,
										optionsAccess
									});


									sessionStorage.verify=JSON.stringify({
										state:false
									});
									
									callback( true, dataEmail );

								}else{
									callback( false, dataEmail );
								}
							});
						}

					}else{
						callback( false, dataEmail );
					}

				});
		    } else { 
		    	callback( false, null );
		    } 

		}catch(e){
			// console.log("xd7");
		}

		callbackObserver(observerAuthState);

	});

}


export const signInGoogle = () => {
	
	const provider = new app.auth.GoogleAuthProvider();

	app.auth().signInWithPopup( provider ).then( result => {

	}).catch( error => {

		// console.log(error);

	});

}

export const signOutGoogle= ( callback ) =>{
	app.auth().signOut().then(function() {
		callback( true );
	}).catch(function(error) {
		callback( false );
	});
}


export const signInWithPassword = ( email, password, callback )=>{
	app.auth().signInWithEmailAndPassword(email, password).then((user) => {
		callback( true );
	}).catch((error) => {
		callback( false );
	});	
}

export const createAccountWithPassword = ( email, password, callback )=>{
	app.auth().createUserWithEmailAndPassword(email, password).then((user) => {
		callback( true );
	}).catch((error) => {
		callback( false );
	});	
}


export const validateAccount = (email, password) =>{
	if(email !== "" && password !== ""){
		const isEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);// eslint-disable-line
		if( isEmail ){
			return true;
		}else return false;
	}else return false;
}