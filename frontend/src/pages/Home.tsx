import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../app/store";
import ExpenseForm from "../components/ExpenseForm";

const Home = () => {
	const navigate = useNavigate();

	const { user } = useSelector((state: RootState) => state.auth);

	useEffect(() => {
		if (!user) {
			navigate("/login");
		}
	}, [user, navigate]);

	return (
		<div>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-8 mx-auto">
					<div className="flex flex-col text-center w-full mb-2">
						<h1 className="sm:text-3xl text-2xl font-medium title-font text-indigo-900">
							Expenses
						</h1>
					</div>
					<div className="flex m-4 flex-col-reverse md:flex-row">
						<div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <div className="p-4 md:w-1/3">
							<div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
								<div className="flex items-center mb-3">
									<div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
										</svg>
									</div>
									<h2 className="text-gray-900 text-lg title-font font-medium">Shooting Stars</h2>
                                    <p className="text-red-600 text-lg ml-auto">$500.00</p>

								</div>
								<div className="flex-grow">
									<p className="leading-relaxed text-base">
										Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy.
										Gastropub indxgo juice poutine.
									</p>
									<span className="text-xs inline-block mx-1 py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded-full">
										Primary
									</span>
									
									<div className="flex mt-4 w-full">
											<button
												type="button"
												className="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
											>
												Details
											</button>
									        <p className="inline-block ml-auto">23-10-2020</p>
									</div>
								</div>
							</div>
						</div>
                        <div className="p-4 md:w-1/3">
							<div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
								<div className="flex items-center mb-3">
									<div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
										</svg>
									</div>
									<h2 className="text-gray-900 text-lg title-font font-medium">Shooting Stars</h2>
                                    <p className="text-red-600 text-lg ml-auto">$500.00</p>

								</div>
								<div className="flex-grow">
									<p className="leading-relaxed text-base">
										Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy.
										Gastropub indxgo juice poutine.
									</p>
									<span className="text-xs inline-block mx-1 py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded-full">
										Primary
									</span>
									
									<div className="flex mt-4 w-full">
											<button
												type="button"
												className="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
											>
												Details
											</button>
									        <p className="inline-block ml-auto">23-10-2020</p>
									</div>
								</div>
							</div>
						</div>
                        <div className="p-4 md:w-1/3">
							<div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
								<div className="flex items-center mb-3">
									<div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
										</svg>
									</div>
									<h2 className="text-gray-900 text-lg title-font font-medium">Shooting Stars</h2>
                                    <p className="text-red-600 text-lg ml-auto">$500.00</p>

								</div>
								<div className="flex-grow">
									<p className="leading-relaxed text-base">
										Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy.
										Gastropub indxgo juice poutine.
									</p>
									<span className="text-xs inline-block mx-1 py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded-full">
										Primary
									</span>
									
									<div className="flex mt-4 w-full">
											<button
												type="button"
												className="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
											>
												Details
											</button>
									        <p className="inline-block ml-auto">23-10-2020</p>
									</div>
								</div>
							</div>
						</div>
						</div>
						<div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
							<ExpenseForm />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
