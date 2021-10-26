import axios from "axios";
import { apiRest, headers, pushNotification } from "./../config";

const { host, version } = apiRest;
const hostPush = pushNotification.host;
const versionPush = pushNotification.version;

const instance = (othersHeaders) =>
	axios.create({
		baseURL: `${host}/${version}`,
		timeout: 200000,
		headers: {
			"Content-Type": "application/json",
			...headers,
			...othersHeaders,
		},
	});

const instancePush = axios.create({
	baseURL: `${hostPush}/${versionPush}`,
	timeout: 200000,
	headers: {
		"Content-Type": "application/json",
		...headers,
	},
});
export { instance, instancePush };
