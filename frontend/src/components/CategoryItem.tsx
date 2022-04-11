import React, { FC } from "react";
import CategoryInterface from "../interfaces/CategoryInterface";

interface CategoryItemProps {
    category: CategoryInterface
}

const dropdownFunction = (event: React.MouseEvent<HTMLButtonElement>) => {
    let element = event.currentTarget;
    if (element && element.parentElement && element.parentElement.parentElement) {
        console.log(element);
        console.log("element");

        var dropdowns = document.getElementsByClassName('dropdown-content');
        console.log(dropdowns);

        let list = element.parentElement.parentElement.getElementsByClassName('dropdown-content')[0];
        list.classList.add('target');
        for (let idx = 0; idx < dropdowns.length; idx++) {
            if (!dropdowns[idx].classList.contains('target')) {
                dropdowns[idx].classList.add('hidden');
            }
        }
        list.classList.toggle('hidden');

    }
}

const dropdownFunctionOpposite = () => {
    console.log("dropdownFunctionOpposite");
    var dropdowns = document.getElementsByClassName('dropdown-content');
    for (let idx = 0; idx < dropdowns.length; idx++) {
        dropdowns[idx].classList.add('hidden');
        dropdowns[idx].classList.remove('target');
    }
}

const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
    return (
        <>
            <tr className="focus:outline-none h-16 border border-gray-100 rounded">
                <td>
                    <div className="ml-5">
                        <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                            <input
                                placeholder="checkbox"
                                type="checkbox"
                                className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full"
                            />
                            <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                <svg
                                    className="icon icon-tabler icon-tabler-check"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <path d="M5 12l5 5l10 -10"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </td>
                <td className="">
                    <div className="flex items-center pl-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-black mr-2"
                            viewBox="0 0 576 512"
                        >
                            <path d={category.icon} />
                        </svg>
                        <p className="text-base font-medium leading-none text-gray-700 mr-2">
                            {category.name}
                        </p>
                    </div>
                </td>

                <td className="pl-4">
                    <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none float-right">
                        View
                    </button>
                </td>
                <td>
                    <div className="relative px-5 pt-2">
                        <button
                            className="focus:ring-2 rounded-md focus:outline-none"
                            onClick={dropdownFunction}
                            onBlur={dropdownFunctionOpposite}
                            aria-label="option"
                        >
                            <svg
                                className="dropbtn"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" ></path>
                                <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" ></path>
                                <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" ></path>
                            </svg>
                        </button>
                        <div className="dropdown-content bg-white shadow w-24 absolute z-30 mr-6 hidden">
                            <div tabIndex={0} className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-500 py-4 px-4 cursor-pointer hover:text-white" >
                                <p>Edit</p>
                            </div>
                            <div tabIndex={0} className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-500 py-4 px-4 cursor-pointer hover:text-white" >
                                <p>Delete</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr className="h-3"></tr>
        </>
    );
};

export default CategoryItem;
