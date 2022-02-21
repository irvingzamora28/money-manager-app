import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nabvar from "../components/Navbar";
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
			</Routes>
		</Router>
	);
};

export default AppRoutes;
