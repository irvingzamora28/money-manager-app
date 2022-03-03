import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../app/store";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseItem from "../components/ExpenseItem";

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
				<div className="container px-5 md:py-8 p-2 mx-auto">
					<div className="flex flex-col-reverse md:flex-row">
						<div className="lg:w-3/4 md:w-1/2 p-2">
							<div className="flex items-end text-center w-full mb-2 h-12">
								<h1 className="sm:text-3xl text-2xl font-medium title-font text-indigo-900">
									Expenses
								</h1>
							</div>
                            <ExpenseItem />
						</div>
						<div className="lg:w-1/4 md:w-1/2 p-2 bg-white flex flex-col md:ml-auto w-full">
							<ExpenseForm />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
