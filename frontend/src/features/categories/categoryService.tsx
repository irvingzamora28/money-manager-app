import config from "../../config/config";

const API_URL = `${config.server.host}:${config.server.port}/api/categories`;

const createCategory = async (token: string) => {
	try {
		const response = await fetch(`${API_URL}`, {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			redirect: "follow",
			referrerPolicy: "no-referrer",
		});
		const json_response = await response.json();

		if (json_response.categories) {
			return json_response.categories[0];
		} else {
			throw new Error(json_response.message);
		}
	} catch (error: any) {
		throw new Error(`There was an error creating the category: ${error.message}`);
	}
};

const getCategories = async (token: string) => {
	try {
		const response = await fetch(`${API_URL}`, {
			method: "GET",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			redirect: "follow",
			referrerPolicy: "no-referrer",
		});

		const json_response = await response.json();

		if (json_response.categories) {
			return json_response.categories;
		} else {
			throw new Error(json_response.message);
		}
	} catch (error: any) {
		throw new Error(`There was an error getting the categories: ${error.message}`);
	}
};

const deleteCategory = async (id: string, token: string) => {
	try {
		const response = await fetch(`${API_URL}/${id}`, {
			method: "DELETE",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			redirect: "follow",
			referrerPolicy: "no-referrer",
		});

        const json_response = await response.json()

        if (json_response.categories) {
            return json_response.categories
        } else {
            throw new Error(json_response.message);
        }
	} catch (error: any) {
        throw new Error(`There was an error deleting the category: ${error.message}`);
    }
};

const categoryService = {
	getCategories,
};

export default categoryService;
