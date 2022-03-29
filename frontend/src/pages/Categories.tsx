import React, { useEffect, useState } from 'react'
import CategoryFormModal from '../components/CategoryFormModal';

const Categories = () => {

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

    const popuphandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        let element = event.currentTarget;
        if (element != null) {
            console.log(element);
            console.log("element");
        }
    }

    const onChange = () => {

    }

    const dropdownFunctionSVG = (event: React.MouseEvent<SVGSVGElement>) => {
        console.log("Clicked SVG");

        // let element = event.target;
        // if (element != null) {
        //     var dropdowns = document.getElementsByClassName('dropdown-content');
        //     var i;
        //     let list = element.parentElement.parentElement.getElementsByClassName('dropdown-content')[0];
        //     list.classList.add('target');
        //     for (i = 0; i < dropdowns.length; i++) {
        //         if (!dropdowns[i].classList.contains('target')) {
        //             dropdowns[i].classList.add('hidden');
        //         }
        //     }
        //     list.classList.toggle('hidden');

        // }
    }

    return (
        <div>
            {/* <CategoryFormModal /> */}
            <div className="sm:px-6 w-full">
                <div className="px-4 md:px-10 py-0 md:pt-4">
                    <div className="flex items-center justify-between">
                        <p tabIndex={0} className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Categories</p>
                        <button onClick={popuphandler} className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                            <p className="text-sm font-medium leading-none text-white">Add Task</p>
                        </button>
                    </div>
                </div>
                <div className="bg-white py-0 md:pt-4 px-4 md:px-8 xl:px-10">
                    <div className="mt-7 overflow-x-visible">
                        <table className="w-full whitespace-nowrap">
                            <tbody>
                                <tr tabIndex={0} className="focus:outline-none h-16 border border-gray-100 rounded">
                                    <td>
                                        <div className="ml-5">
                                            <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                <input placeholder="checkbox" type="checkbox" className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                    <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                                        <path d="M5 12l5 5l10 -10"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="">
                                        <div className="flex items-center pl-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-black mr-2" viewBox="0 0 576 512"><path d="M568.1 196.3l-22.62-22.62c-4.533-4.533-10.56-7.029-16.97-7.029s-12.44 2.496-16.97 7.029l-5.654 5.656l-20.12-20.12c4.596-23.46-2.652-47.9-19.47-64.73l-45.25-45.25C390.2 17.47 347.1 0 303.1 0C258.2 0 216 17.47 184.3 49.21L176.5 57.05L272.5 105.1v13.81c0 18.95 7.688 37.5 21.09 50.91l49.16 49.14c13.44 13.45 31.39 20.86 50.54 20.86c4.758 0 9.512-.4648 14.18-1.387l20.12 20.12l-5.654 5.654c-9.357 9.357-9.357 24.58-.002 33.94l22.62 22.62c4.535 4.533 10.56 7.031 16.97 7.031s12.44-2.498 16.97-7.031l90.53-90.5C578.3 220.8 578.3 205.6 568.1 196.3zM270.9 192.4c-3.846-3.846-7.197-8.113-10.37-12.49l-239.5 209.2c-28.12 28.12-28.16 73.72-.0371 101.8C35.12 505 53.56 512 71.1 512s36.84-7.031 50.91-21.09l209.1-239.4c-4.141-3.061-8.184-6.289-11.89-9.996L270.9 192.4z"/></svg>
                                            <p className="text-base font-medium leading-none text-gray-700 mr-2">Marketing Keynote Presentation</p>
                                        </div>
                                    </td>
                                   
                                    <td className="pl-4">
                                        <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                    </td>
                                    <td>
                                        <div className="relative px-5 pt-2">
                                            <button className="focus:ring-2 rounded-md focus:outline-none" onClick={dropdownFunction} onBlur={dropdownFunctionOpposite} aria-label="option">
                                                <svg className="dropbtn" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </button>
                                            <div className="dropdown-content bg-white shadow w-24 absolute z-30 mr-6 hidden">
                                                <div tabIndex={0} className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-500 py-4 px-4 cursor-pointer hover:text-white">
                                                    <p>Edit</p>
                                                </div>
                                                <div tabIndex={0} className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-500 py-4 px-4 cursor-pointer hover:text-white">
                                                    <p>Delete</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="h-3"></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories
