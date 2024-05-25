
import React from "react";

const FilterSidebar = () => {
    return (
        <div className="w-1/4 p-4 border-r border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    Ratings
                </label>
                <input
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    className="mt-1 w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    Prices
                </label>
                <input
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    className="mt-1 w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    Location
                </label>
                <input
                    type="text"
                    placeholder="Enter location"
                    className="mt-1 w-full border border-gray-300 p-2"
                />
            </div>
        </div>
    );
};

export default FilterSidebar;
