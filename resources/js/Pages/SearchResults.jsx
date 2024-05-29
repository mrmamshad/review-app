import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';

const SearchResults = () => {
    const { query, results } = usePage().props;

    return (
        <div>
            <h1>Search Results for "{query}"</h1>
            {results.length > 0 ? (
                <ul>
                    {results.map((result) => (
                        <li key={result.id}>
                            <InertiaLink href={`/catagories/${result.id}`}>{result.name}</InertiaLink>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
};

export default SearchResults;
