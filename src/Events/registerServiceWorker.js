import { subscribe,unSubscribe} from './../apiRest/requestPush'

// import { pushNotification } from './../config';
// const { host, version } = pushNotification;

const urlBase64ToUint8Array = (base64String) => {
	const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
	const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

	const rawData = window.atob(base64);
	const outputArray = new Uint8Array(rawData.length);

	for (let i = 0; i < rawData.length; ++i) {
		outputArray[i] = rawData.charCodeAt(i);
	}
	return outputArray;
}

const publicVapidKey = "BAnTvEvXvZjAIZriBrq5U7Sso8f0RUDb_ZNHtGB4u60OANHUK8qK1sYuvPTEMUSBa5zyRcAApaHx4W6ZPfKz9YE";

export const triggerPushNotification= async ()=> {
	if ("serviceWorker" in navigator) {
		const register = await navigator.serviceWorker.register(`${window.location.origin}/sw.js`, {
			scope: window.location.origin
		});

		register.update();

		console.log("waiting for acceptance");
		
		let subscription=null;

		setTimeout(async ()=>{
			console.log("xD");
			if(register.installing) {
	       		 console.log('Service worker installing');
		    } else if(register.waiting) {
		        console.log('Service worker installed');
		    } else if(register.active) {
		        console.log('Service worker active');

		        subscription = await register.pushManager.subscribe({
					userVisibleOnly: true,
					applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
				});
				//test

				const {idEmployee} = JSON.parse(localStorage.session);

				subscribe( JSON.stringify({ 
					subscription,
					id_employeesApp: idEmployee
				}) ,({data})=>{
					console.log(data);
					localStorage.configLocal = JSON.stringify({
						activeNotificationsPush: true,
						idSubscription: data.idSubscribe||"",
						sound: true
					});
				});
		    }
	        console.log("acceptance complete");
		},1000);

	} else {
		console.error("Service workers are not supported in this browser");
	}
};



export const unsuscribeNotification = (callback)=>{
	if ('serviceWorker' in navigator) {
	  navigator.serviceWorker.register(`${window.location.origin}/sw.js`,{
	  	scope: window.location.origin
	  }).then(function(registration) {
	    console.log('Registration succeeded.');
	    registration.unregister().then(function(boolean) {

	    	if(boolean){

	    		const {idSubscription} = JSON.parse(localStorage.configLocal);

	    		unSubscribe({
	    			idSubscribe: idSubscription
	    		},(data)=>{
	    			console.log(data);
			     	callback(boolean);
	    		});
	    	}

	    });
	  }).catch(function(error) {
	    console.log('Registration failed with ' + error);
	  });
	};
}