import React from "react";
import "../../css/app.css";
import { InertiaLink } from "@inertiajs/inertia-react";

const MenuComponent = ({ categories, items }) => {
    return (
        <div className="relative z-10 w-full md:w-5/5 flex-shrink-0 overflow-visible rounded-xl border border-gray-600/10 dark:bg-gray-900 px-6 py-6 font-bold text-white h-[400px]">
            <div className="h-full overflow-y-auto hide-scrollbar">
                <div className="font-bold">
                    <h1 className="text-2xl font-semibold text-center text-gray-900 dark:text-gray-200">
                        Categories
                    </h1>
                    <div className="grid w-full mt-5 space-y-4">
                        {categories.map((category) => (
                            <InertiaLink
                            key={category.id}
                            href={`/topics/${category.id}/${encodeURIComponent(category.title)}`}
                                className="w-5/5 h-12 m-2 border border-gray-500 rounded-lg hover:bg-slate-200 shadow-sm text-gray-800 dark:text-gray-200 dark:bg-gray-900 text-center"
                            >
                                <p>{category.title}</p>
                            </InertiaLink>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuComponent;
