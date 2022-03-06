import { FC } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../features/expenses/expenseSlice";
import ExpenseInterface from "../interfaces/ExpenseInterface";

interface ExpenseItemProps {
	expense: ExpenseInterface;
}

const ExpenseItem: FC<ExpenseItemProps> = ({ expense }) => {
	const dispatch = useDispatch();

	const onDelete = () => {
		dispatch(deleteExpense(expense._id ?? ""));
	};
	return (
		<>
			<div className="flex rounded-lg h-full bg-gray-100 p-2 m-2 flex-col">
				<div className="flex items-center">
					<div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
						<svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="w-5 h-5"
							viewBox="0 0 24 24"
						>
							<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
						</svg>
					</div>
					<h2 className="text-gray-900 text-md title-font font-medium">{expense.name}</h2>
					<p className="text-red-600 text-md ml-auto">${parseFloat(expense.quantity).toFixed(2)}</p>
				</div>
				<div className="flex-grow">
					<p className="text-md my-1">{expense.description}</p>
					<div className="flex flex-wrap">
						<span className="text-xs mr-2 mb-2 inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded-full">
							Primary
						</span>
					</div>

					<div className="flex w-full">
						{/* <button
							type="button"
							className="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						>
							View more
						</button> */}
						<p className="flex self-center mr-auto">
							{new Date(expense.createdAt ?? "").toLocaleDateString("en-US")}
						</p>
						<button
							onClick={onDelete}
							className="inline-block ml-2 px-2 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
						>
							<FaTrash />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ExpenseItem;
