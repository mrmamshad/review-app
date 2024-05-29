// resources/js/Pages/Search.jsx

import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { MdArrowForward } from "react-icons/md";

const Search = ({ categories, items }) => {
    const [input, setInput] = useState(false);
    const [data, setData] = useState(categories, items);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    // data.map((item) => console.log(item.title));


    // console.log(filteredData[0].title);

    const handleSearch = (e) => {
        e.preventDefault();

        if (query === '') {
            setResults([]);
            return;
        }

        const filteredData = data.filter(data =>
            data.title.toLowerCase().includes(query.toLowerCase())
        );
        setInput(true)
        setResults(filteredData.length > 0 ? filteredData : ['Not found']);
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <div className="flex justify-center mt-10 px-5">
                            <div className="relative w-full max-w-md">
                                <input
                                    className="w-full p-2 pl-10 border border-gray-500 rounded-xl focus:ring-0 bg-white dark:bg-gray-800"
                                    type="text"
                                    placeholder="Search categories"
                                    value={query}
                                    onChange={(e) =>{

                                        setQuery(e.target.value)
                                    } }
                                />
                                <svg
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-4a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            <button type="submit" className='absolute right-0  top-3 px-3  '><MdArrowForward /></button>
                            </div>
                        </div>
            </form>
            {input && (
                <div className='mt-10 w-4/5 mx-auto  border border-gray-500 p-2 rounded-xl '>
                {results.length > 0 ? (
                    results[0] === 'Not found' ? (
                        <p>No results found</p>
                    ) : (
                        <div >
                            <b> ID: {results[0].id}</b> <br/>
                            <b>Name: {results[0].title}</b>
                        </div>
                    )
                ) : (
                    <p>not found any results</p>
                )}
            </div>
            )}
        </div>
    );
};

export default Search;
