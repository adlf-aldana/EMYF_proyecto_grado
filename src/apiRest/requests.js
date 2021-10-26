import { instance } from "./axiosConfig";

export const isEmployees = (email, callback) => {
	instance({})
		.get(`/login/isemployees/${email}`)
		.then((response) => {
			callback(response);
		});
};

export const addEmployee = (data, callback) => {
	instance({})
		.post("/employee/add", data)
		.then((response) => {
			callback(response);
		});
};
////////////////////

export const updateEmployee = (data, callback) => {
	const { token } = JSON.parse(localStorage.session);
	instance({
		auth_token: token,
	})
		.post("/employee/update", data)
		.then((response) => {
			callback(response);
		});
};

export const sendCode = (data, callback) => {
	const { token } = JSON.parse(localStorage.session);
	instance({
		auth_token: token,
	})
		.post("/verify/sendCode", data)
		.then((response) => {
			callback(response);
		});
};

////////////////////////
export const listAllRequirements = (callback) => {
	const { token } = JSON.parse(localStorage.session);
	instance({
		auth_token: token,
	})
		.get("/requirements/listAll")
		.then((response) => {
			callback(response);
		});
};

export const listRequirementsCurrent = (callback) => {
	const { token } = JSON.parse(localStorage.session);
	instance({
		auth_token: token,
	})
		.get("/requirements/listCurrent")
		.then((response) => {
			callback(response);
		});
};

export const getRequirement = (id, callback) => {
	const { token } = JSON.parse(localStorage.session);
	instance({
		auth_token: token,
	})
		.get(`/requirements/getRequirement/${id}`)
		.then((response) => {
			callback(response);
		});
};

export const getListCodeRequirements = (callback) => {
	// console.log("xd2");
	const { token } = JSON.parse(localStorage.session);
	instance({
		auth_token: token,
	})
		.get(`/requirements/getListCodeRequirements`)
		.then((response) => {
			// console.log(response);
			callback(response);
		});
};

//////////////////////////////
export const getListEmployees = (callback) => {
	// console.log("xd2");
	const { token } = JSON.parse(localStorage.session);
	instance({
		auth_token: token,
	})
		.get(`/employee/getListEmployees`)
		.then((response) => {
			console.log(response);
			callback(response);
		});
};
////////////////////////////////

export const getListIncome = (callback) => {
	// console.log("xd2");
	const { token } = JSON.parse(localStorage.session);
	instance({
		auth_token: token,
	})
		.get(`/reportInventory/getListIncome`)
		.then((response) => {
			console.log(response,"<------");
			callback(response);
		});
};


export const getListEgress = (callback) => {
	// console.log("xd2");
	const { token } = JSON.parse(localStorage.session);
	instance({
		auth_token: token,
	})
		.get(`/reportInventory/getListEgress`)
		.then((response) => {
			console.log(response,"<------");
			callback(response);
		});
};

export const getListMaterial = (callback) => {
	// console.log("xd2");
	const { token } = JSON.parse(localStorage.session);
	instance({
		auth_token: token,
	})
		.get(`/reportInventory/getListMaterial`)
		.then((response) => {
			console.log(response,"<------");
			callback(response);
		});
};


//////////////////

export const getListProviders = (callback) => {
	// console.log("xd2");
	const { token } = JSON.parse(localStorage.session);
	instance({
		auth_token: token,
	})
		.get(`/providers/getListProviders`)
		.then((response) => {
			console.log(response,"<------");
			callback(response);
		});
};

export const updateProviders = (data, callback) => {
	const { token } = JSON.parse(localStorage.session);
	instance({
		auth_token: token,
	})
		.post(`/providers/updateProviders`, data)
		.then((response) => {
			callback(response);
		});
};

///////////////

export const getListCodeRequiEmployees = (callback) => {
	// console.log("xd2");
	const { token } = JSON.parse(localStorage.session);
	instance({
		auth_token: token,
	})
		.get(`/requirementsEmployees/getListCodeRequiEmployees`)
		.then((response) => {
			// console.log(response);
			callback(response);
		});
};
/////////////
export const addStockInventory = (data, callback) => {
	const { token } = JSON.parse(localStorage.session);
	instance({
		auth_token: token,
	})
		.post("/inventory/add", data)
		.then((response) => {
			callback(response);
		});
};

export const getListMaterialOrden = (callback) => {
	// console.log("xd2");
	const { token } = JSON.parse(localStorage.session);
	instance({
		auth_token: token,
	})
		.get("/inventory/getListMaterialOrden")
		.then((response) => {
			console.log(response,"<------");
			callback(response);
		});
};

