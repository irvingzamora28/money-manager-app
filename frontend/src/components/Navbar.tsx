import { FaSearch, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<nav className="bg-white shadow dark:bg-gray-800">
				<div className="container px-6 py-3 mx-auto">
					<div className="flex flex-col md:flex-row md:justify-between md:items-center">
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<button className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
									Money Manager 💵
								</button>

								{/* <!-- Search input on desktop screen --> */}
								<div className="hidden mx-10 md:block">
									<div className="relative">
										<span className="absolute inset-y-0 left-0 flex items-center pl-3">
											<FaSearch />
										</span>

										<input
											type="text"
											className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
											placeholder="Search"
										/>
									</div>
								</div>
							</div>

							{/* <!-- Mobile menu button --> */}
							<div className="flex md:hidden">
								<button
									type="button"
									className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
									aria-label="toggle menu"
								>
									<FaSearch />
								</button>
							</div>
						</div>

						{/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
						<div className="items-center md:flex">
							<div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
								<button className="my-1 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:mx-4 md:my-0">
									Home
								</button>
							</div>

							<div className="flex items-center py-2 -mx-1 md:mx-0">
								<Link
									to="/login"
									className="flex items-center w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-blue-600 md:mx-2 md:w-auto"
								>
									Login <FaSignInAlt className="ml-2" />
								</Link>
								<Link to="/register" className="flex items-center w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 md:mx-0 md:w-auto">
									Register <FaUser className="ml-2" />
								</Link>
							</div>

							{/* <!-- Search input on mobile screen --> */}
							<div className="mt-3 md:hidden">
								<div className="relative">
									<span className="absolute inset-y-0 left-0 flex items-center pl-3">
										<svg
											className="w-5 h-5 text-gray-400"
											viewBox="0 0 24 24"
											fill="none"
										>
											<path
												d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>
										</svg>
									</span>

									<input
										type="text"
										className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
										placeholder="Search"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;