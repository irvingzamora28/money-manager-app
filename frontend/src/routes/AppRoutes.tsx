import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nabvar from "../components/Navbar";
import Categories from "../pages/Categories";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRoutes = () => {
	return (
		<Router>
			<Nabvar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/categories" element={<Categories />} />
			</Routes>
		</Router>
	);
};

export default AppRoutes;
