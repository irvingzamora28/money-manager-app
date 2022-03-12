import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { TailSpin } from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../app/store";
import DeleteExpenseModal from "../components/DeleteExpenseModal";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseFormModal from "../components/ExpenseFormModal";
import ExpenseItem from "../components/ExpenseItem";
import { getExpenses, reset } from "../features/expenses/expenseSlice";
const Home = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [expenseFormModalOpen, setExpenseFormModalOpen] = useState(false);
	const [deleteExpenseFormModalOpen, setDeleteExpenseFormModalOpen] = useState(false);

	const { user } = useSelector((state: RootState) => state.auth);
	const { expenses, isLoading, isSuccess, success } = useSelector((state: RootState) => state.expenses);

	useEffect(() => {
		if (!user) {
			navigate("/login");
		}

		// TODO: Fetch expenses only on first load, do not fetch all expenses when creating a new one or deleting one
		dispatch(getExpenses(null));
		return () => {
			dispatch(reset());
		};
	}, [user, isSuccess, success, dispatch, navigate]);

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
						{expenses && expenses.length > 0 ? (
							<div className="lg:w-3/4 md:w-1/2 p-2">
								<div className="flex items-end text-center w-full mb-2 h-12">
									<h1 className="sm:text-3xl text-2xl font-medium title-font text-indigo-900">
										Expenses
									</h1>
								</div>
								<div className="bg-gray-300 rounded-lg overflow-hidden px-1 items-end justify-start relative">
									<div className="p-1 w-full">
										{expenses.map((expense) => (
											<ExpenseItem key={expense._id} expense={expense} />
										))}
									</div>
								</div>
							</div>
						) : (
							<div className="flex items-end text-center w-full mb-2 h-12">
								<h1 className="md:text-lg text-3xl font-medium title-font text-indigo-500">
									You have no expenses
								</h1>
							</div>
						)}

						<div className="lg:w-1/4 md:w-1/2 p-2 bg-white flex-col md:ml-auto w-full md:block hidden">
							<ExpenseForm />
						</div>
					</div>
				</div>
				<div className="flex fixed bottom-10 right-10 md:hidden">
					<button
						type="button"
						onClick={() => {
							setExpenseFormModalOpen(true);
						}}
						className="inline-block rounded-full bg-blue-600 text-white leading-normal uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-12 h-12"
					>
						<FaPlus className="w-3 mx-auto" />
					</button>
				</div>
			</section>
			{expenseFormModalOpen && <ExpenseFormModal setExpenseFormModalOpen={setExpenseFormModalOpen} />}

			<DeleteExpenseModal setDeleteExpenseFormModalOpen={setDeleteExpenseFormModalOpen} />

		</div>
	);
};

export default Home;
