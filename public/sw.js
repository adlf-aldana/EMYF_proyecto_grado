
self.addEventListener("push", async (event) => {
	const data = event.data.json();

	const windowClients = await clients.matchAll({
		type: "window",
		includeUncontrolled: true,
	});

	const visible = windowClients.find(
		(windowClient) => windowClient.visibilityState === "visible",
	);

	if (!visible) notificationStart(data);
});

const notificationStart = ({ title, message, url }) => {
	self.registration.showNotification(title, {
		body: message,
		vibrate: [500, 110, 500],
		icon: "/logo192.png",
		badge: "/favicon.ico",
		data: {url},
		actions: [
			{
				action: "openWindows",
				title: "ver",
				// icon: "/favicon.ico",
			},
			{
				action: "hiddenNotification",
				title: "cancelar",
				// icon: "/favicon.ico",
			},
		],
	});
};

self.addEventListener(
	"notificationclick",
	(event) => {
		const { notification, action } = event;
		// const { data } = notification;   id de notificacion

		notification.close();
		actionExecute(action, notification, event);
	},
	false,
);

const actionExecute = (action, notification, event) => {
	const { url } = notification.data;

	switch (action) {
		case "openWindows":
			openWindows( url, event );
			break;
		case "hiddenNotification":
			notification.close();
			break;
		default:
			break;
	}
};

const openWindows = async ( _url, event ) => {

	 event.waitUntil(async function() {
	    const allClients = await clients.matchAll({
	      includeUncontrolled: true
	    });

	    let employee;

	    for (const client of allClients) {
	      const url = new URL(client.url);

	      if (url.pathname == _url) {
	      	// console.log(client);
	        client.focus();
	        employee = client;
	        break;
	      }
	    }

	    if (!employee) {
	      employee = await clients.openWindow(_url);
	    }

	    employee.postMessage("New chat messages!");
	  }());
};
