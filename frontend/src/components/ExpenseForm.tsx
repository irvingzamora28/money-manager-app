import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { RootState } from "../app/store";
import { createExpense } from "../features/expenses/expenseSlice";

type Props = {
    setExpenseFormModalOpen?: React.Dispatch<React.SetStateAction<any>>;
};


const ExpenseForm: React.FC<Props> = ({setExpenseFormModalOpen}) => {
	const dispatch = useDispatch();

	const [expenseData, setExpenseData] = useState({
		name: "",
		quantity: "",
		description: "",
	});

	const { name, quantity, description } = expenseData;

	const { expenses, isLoading, isError, isSuccess, error, success } = useSelector((state: RootState) => state.expenses);

	useEffect(() => {
		if (isError && error) {
			toast.error(error.message);
		}
		if (isSuccess && success) {
			toast.success(success.message);
			setExpenseData({name: "", quantity: "", description: ""})
		}
	}, [expenses, isError, isSuccess, error, success, dispatch]);

	const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setExpenseData((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	const onSubmit = (event: React.FormEvent<EventTarget>) => {
		event.preventDefault();
		dispatch(createExpense(expenseData))
        if (setExpenseFormModalOpen) {
			setExpenseFormModalOpen(false)
		}

	};

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
		<>
			<div className="justify-center items-center align-middle h-3/4">
				<div className="flex items-end text-center w-full mb-2 h-12">
					<h1 className="md:text-lg text-3xl font-medium title-font text-indigo-500">Create Expense</h1>
				</div>
				<div className="block p-6 rounded-lg shadow-lg bg-white w-full">
					<form onSubmit={onSubmit}>
						<div className="form-group mb-6">
							<input
								type="text"
								className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								id="name"
								name="name"
								value={name}
								onChange={onChange}
								placeholder="Name"
							/>
						</div>
						<div className="form-group mb-6">
							<input
								type="text"
								className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								id="quantity"
								name="quantity"
								value={quantity}
								onChange={onChange}
								placeholder="Quantity"
							/>
						</div>
						<div className="form-group mb-6">
							<textarea
								className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
								id="description"
								name="description"
								value={description}
								onChange={onChange}
								rows={3}
								placeholder="Description"
							></textarea>
						</div>

						<button
							type="submit"
							className=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						>
							Create
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default ExpenseForm;
