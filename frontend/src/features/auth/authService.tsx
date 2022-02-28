import config from "../../config/config";

const API_URL = `${config.server.host}:${config.server.port}/api/users/register`;

// Register user
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
	} catch (error) {
		return error;
	}
};

const authService = {
	register,
};

export default authService;
