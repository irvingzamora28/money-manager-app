import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import CategoryFormModal from "../components/CategoryFormModal";
import CategoryItem from "../components/CategoryItem";
import { getCategories } from "../features/categories/categorySlice";

const Categories = () => {
    const dispatch = useDispatch();
    const { categories, isLoading, isSuccess, success } = useSelector((state: RootState) => state.categories);
    console.log("categories");
    console.log(categories);

    useEffect(() => {
        dispatch(getCategories(null));

        return () => { };
    }, [dispatch]);

    const popuphandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        let element = event.currentTarget;
        if (element != null) {
            console.log(element);
            console.log("element");
        }
    };

    const onChange = () => { };

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
    };

    return (
        <div>
            {/* <CategoryFormModal /> */}
            <div className="sm:px-6 w-full">
                <div className="px-4 md:px-10 py-0 md:pt-4">
                    <div className="flex items-center justify-between">
                        <p tabIndex={0} className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800" >
                            Categories
                        </p>
                        <button onClick={popuphandler} className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                            <p className="text-sm font-medium leading-none text-white">Add Category</p>
                        </button>
                    </div>
                </div>
                <div className="bg-white py-0 md:pt-4 px-4 md:px-8 xl:px-10">
                    <div className="mt-7 overflow-x-visible">
                        <table className="w-full whitespace-nowrap">
                            <tbody>
                                {categories.map((category) => (
                                    <CategoryItem key={category._id} category={category} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
