import React, { useState } from 'react';
import axios from 'axios';

const SearchComponent = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState({ categories: [], items: [] });
    const [message, setMessage] = useState('');

    const handleSearch = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.get('http://your-laravel-api-url/api/search', {
                params: { query },
            });
            setResults(response.data);
            setMessage('');
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setMessage('No results found');
                setResults({ categories: [], items: [] });
            } else {
                setMessage('An error occurred');
            }
        }
    };

    return (
        <div className="search-component">
            <form onSubmit={handleSearch}>
                <div className="relative w-full max-w-md">
                    <div className="flex items-center w-full">
                        <svg
                            className="w-5 h-5 text-gray-400 ml-3"
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
                        <input
                            className="w-full p-2 pl-3 border border-gray-500 rounded-xl focus:ring-0 bg-white dark:bg-gray-800"
                            type="search"
                            placeholder="Search categories and items"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>
                </div>
                <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded-xl">
                    Search
                </button>
            </form>
            {message && <p>{message}</p>}
            <div className="results mt-4">
                <h3>Categories</h3>
                {results.categories.map((category) => (
                    <div key={category.id}>{category.name}</div>
                ))}
                <h3>Items</h3>
                {results.items.map((item) => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </div>
        </div>
    );
};

export default SearchComponent;
