import React from "react";
import "../../css/app.css";

const MenuComponent = () => {
    return (
        <div className="relative z-10 w-full lg:w-[317px] flex-shrink-0 overflow-visible rounded-xl border border-gray-600/10 dark:bg-gray-900 px-6 py-6 font-bold text-white h-[400px]">
            <div className="h-full overflow-y-auto hide-scrollbar">
                <div className="font-bold">
                    <h1 className="text-2xl   font-semibold text-center text-gray-900 dark:text-gray-200">
                        Categorys
                    </h1>
                    <div className="grid w-full mt-5 space-y-4">
                        <a
                            href="/apps"
                            className="w-5/5 h-12 m-2  border border-gray-500 rounded-lg hover:bg-slate-200 shadow-sm text-gray-800 dark:text-gray-200 dark:bg-gray-900 text-center"
                        >
                            Apps
                        </a>
                        <a
                            href="/books"
                            className="w-5/5 h-12 m-2 border-gray-500 border rounded-lg hover:bg-slate-200 shadow-sm dark:bg-gray-900 text-center dark:text-gray-200 text-gray-800"
                        >
                            Books
                        </a>
                        <a
                            href="/restaurants"
                            className="w-5/5 m-2 h-12 border-gray-500 border hover:bg-slate-200 shadow-sm dark:bg-gray-900 text-center dark:text-gray-200 text-gray-800 rounded-lg"
                        >
                            Restaurants
                        </a>

                        <a
                            href="/hotels"
                            className="w-5/5 m-2 h-12 border-gray-500 border hover:bg-slate-200 shadow-sm dark:bg-gray-900 text-center dark:text-gray-200 text-gray-800 rounded-lg"
                        >
                            Hotels
                        </a>
                        <a
                            href="/hotels"
                            className="w-5/5 m-2 h-12 border-gray-500 border hover:bg-slate-200 shadow-sm dark:bg-gray-900 text-center dark:text-gray-200 text-gray-800 rounded-lg"
                        >
                            Hotels
                        </a>
                        <a
                            href="/hotels"
                            className="w-5/5 m-2 h-12 border-gray-500 border hover:bg-slate-200 shadow-sm dark:bg-gray-900 text-center dark:text-gray-200 text-gray-800 rounded-lg"
                        >
                            Hotels
                        </a>
                        <a
                            href="/hotels"
                            className="w-5/5 m-2 h-12 border-gray-500 border hover:bg-slate-200 shadow-sm dark:bg-gray-900 text-center dark:text-gray-200 text-gray-800 rounded-lg"
                        >
                            Hotels
                        </a>
                        <a
                            href="/hotels"
                            className="w-5/5 m-2 h-12 border-gray-500 border hover:bg-slate-200 shadow-sm dark:bg-gray-900 text-center dark:text-gray-200 text-gray-800 rounded-lg"
                        >
                            Hotels
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuComponent;
