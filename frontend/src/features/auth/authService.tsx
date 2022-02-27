import axios from "axios";

const API_URL = "http://localhost:5000/api/users/";

// Register user
const register = async (userData:any) => {
    try {
        
        const response = await axios.post(API_URL, {
            "name": "Irving Zamora",
            "email": "test1@email.com",
            "password": "asdasd1"
        });
        // const user = await response.json();
        
        if (response.data) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        
        return response.data;
    } catch (error) {
        return "hello";    
    }
};

const authService = {
	register,
};

export default authService;
