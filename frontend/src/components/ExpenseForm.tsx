import React from "react";

const ExpenseForm = () => {
	const onSubmit = (event: React.FormEvent<EventTarget>) => {
		event.preventDefault();
	};
	return (
		<>
			<section className="">
				<div className="flex flex-col justify-center items-center align-middle h-3/4">
					<h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
						CREATE NEW EXPENSE
					</h2>
					<div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
						<form onSubmit={onSubmit}>
							<div className="form-group mb-6">
								<input
									type="text"
									className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									id="exampleInput7"
									placeholder="Name"
								/>
							</div>
							<div className="form-group mb-6">
								<input
									type="text"
									className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									id="exampleInput8"
									placeholder="Quantity"
								/>
							</div>
							<div className="form-group mb-6">
								<textarea
									className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
									id="exampleFormControlTextarea13"
									rows={3}
									placeholder="Description"
								></textarea>
							</div>

							<button
								type="submit"
								className=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
							>
								Save
							</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default ExpenseForm;
