import React from "react";

const ExpenseItem = () => {
	return (
		<>
			<div className="bg-gray-300 rounded-lg overflow-hidden p-2 lg:p-10  items-end justify-start relative">
				<div className="p-4 w-full">
					<div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
						<div className="flex items-center mb-3">
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
							<h2 className="text-gray-900 text-lg title-font font-medium">Shooting Stars</h2>
							<p className="text-red-600 text-lg ml-auto">$500.00</p>
						</div>
						<div className="flex-grow">
							<p className="leading-relaxed text-base">
								Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub
								indxgo juice poutine.
							</p>
							<div className="flex flex-wrap">
								<span className="text-xs mr-2 mb-2 inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded-full">
									Primary
								</span>
							</div>

							<div className="flex mt-4 w-full">
								<button
									type="button"
									className="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
								>
									View more
								</button>
								<p className="inline-block ml-auto">23-10-2020</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ExpenseItem;
