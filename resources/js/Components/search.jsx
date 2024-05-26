import React, { useState } from "react";
import axios from "axios";

const SearchComponent = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get("/search", { params: { query } });
            setResults(response.data);
        } catch (error) {
            console.error("Error fetching search results", error);
        }
    };

    return (
        <div className="relative w-full max-w-lg mx-auto mt-4 grid-cols-3 ">
            <form onSubmit={handleSearch} className="sm:w-full w-4/5">
                <input
                    className="w-full sm:mx-0  mx-10 p-2 border-1 border-gray-300 rounded-xl focus:ring-0 bg-sl dark:bg-gray-800 "
                    type="search"
                    placeholder="search a catagory"
                    name="query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    type="submit"
                    className="absolute  sm:right-2  right-11 top-0 mt-1  mr-2 bg-blue-500 text-white rounded-lg py-1 px-2"
                >
                    <span className="hidden md:inline">Search</span>
                    <span className="md:hidden">
                        <svg
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM6.75 2a4.75 4.75 0 1 0 2.987 8.444l3.91 3.91.707-.708-3.91-3.91A4.75 4.75 0 0 0 6.75 2Z"
                            />
                        </svg>
                    </span>
                </button>
            </form>
            <ul>
                {results.map((result) => (
                    <li key={result.id}>{result.name}</li>
                ))}
                {console.log(results)}
            </ul>
        </div>
    );
};

export default SearchComponent;
