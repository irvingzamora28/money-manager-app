import React, { useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RootState } from "../app/store";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseItem from "../components/ExpenseItem";
import { getExpenses, reset } from "../features/expenses/expenseSlice";
const Home = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((state: RootState) => state.auth);
	const { expenses, isLoading } = useSelector((state: RootState) => state.expenses);

	useEffect(() => {
		if (!user) {
			navigate("/login");
		}

		dispatch(getExpenses(null))
		return () => {
			dispatch(reset())
		}
	}, [user, dispatch, navigate]);

	// TODO: Extract into component
	if (isLoading) {
		return (
			<>
				<section className="h-screen">
					<div className="flex justify-center items-center align-middle h-3/4">
						<TailSpin color="#00BFFF" height={80} width={80} />
					</div>
				</section>
			</>
		);
	}

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
