import config from "../../config/config";

const API_URL = `${config.server.host}:${config.server.port}/api/categories`;

const getCategories = async (token: string) => {
	try {
		const response = await fetch(`${API_URL}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});

        const json_response = await response.json()
        
        if (json_response.categories) {
            return json_response.categories
        } else {
            throw new Error(json_response.message);
        }
	} catch (error: any) {
        throw new Error(`There was an error getting the categories: ${error.message}`);
        
    }
};

const categoryService = {
	getCategories,
};

export default categoryService;
