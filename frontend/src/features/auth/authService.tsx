import config from "../../config/config";

const API_URL = `${config.server.host}:${config.server.port}/api/users/register`;

const register = async (userData: any) => {
	try {
		const response = await fetch(API_URL, {
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

const logout = () => {
	localStorage.removeItem("user");
};

const authService = {
	register,
	logout,
};

export default authService;
