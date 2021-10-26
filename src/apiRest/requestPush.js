import { instancePush } from "./axiosConfig";

export const subscribe = (data, callback) => {
	instancePush.post(`/subscribe`, data).then((response) => {
		callback(response);
	});
};

export const unSubscribe = (data, callback) => {
	instancePush.post(`/unSubscribe`, data).then((response) => {
		callback(response);
	});
};
