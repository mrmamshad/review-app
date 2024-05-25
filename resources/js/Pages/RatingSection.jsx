import React from "react";

function RatingSection() {
    return (
        <>
            <h1 className="font-sans  py-4 ml-3 font-bold ">Rating</h1>
            <div className="flex mx-5  border border-gray-500 rounded-md">
                <button className="px-4 py-2 border-r border-gray-500 bg-blue-100 text-blue-700 rounded-l-sm focus:outline-none">
                    Any
                </button>
                <button className="px-4 py-2 border-r border-gray-500 hover:bg-blue-100  flex items-center focus:outline-none">
                    <span className="text-black">★</span>
                    <span className="ml-1 font-bold  ">3.0+</span>
                </button>
                <button className="px-4 py-2 border-r border-gray-500 hover:bg-blue-100  flex items-center focus:outline-none">
                    <span className="text-black">★</span>
                    <span className="ml-1 font-bold  ">4.0+</span>
                </button>
                <button className="px-4 py-2 border-r border-gray-500 hover:bg-blue-100  flex items-center focus:outline-none">
                    <span className="text-black">★</span>
                    <span className="ml-1 font-bold ">4.5+</span>
                </button>
                <button className="px-2 py-2  flex items-center hover:bg-blue-100  focus:outline-none">
                    <span className="text-black">★</span>
                    <span className="ml-1 font-bold  ">5.0+</span>
                </button>
            </div>
        </>
    );
}

export default RatingSection;
