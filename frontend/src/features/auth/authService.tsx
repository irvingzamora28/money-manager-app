import config from "../../config/config";

const API_URL = `${config.server.host}:${config.server.port}/api/users`;

const register = async (userData: any) => {
	try {
		const response = await fetch(`${API_URL}/register`, {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			},
			redirect: "follow",
			referrerPolicy: "no-referrer",
			body: JSON.stringify(userData),
		});
		const user = await response.json();
		if (user) {
			localStorage.setItem("user", JSON.stringify(user));
		}
		return user;
	} catch (error: any) {
		throw new Error("There was an error making the register request");
	}
};

const login = async (userData: any) => {
	let response;
	let userResponse;
	try {
		response = await fetch(`${API_URL}/login`, {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			},
			redirect: "follow",
			referrerPolicy: "no-referrer",
			body: JSON.stringify(userData),
		});
		userResponse = await response.json();
	} catch (error: any) {
		throw new Error("There was an error making the register request");
	}
	if (response.status !== 201) {
		
		throw new Error(userResponse.message);
	}

	if (userResponse) {
		localStorage.setItem("user", JSON.stringify(userResponse));
	}
	return userResponse;
};

const logout = () => {
	localStorage.removeItem("user");
};

const authService = {
	register,
	logout,
	login,
};

export default authService;
