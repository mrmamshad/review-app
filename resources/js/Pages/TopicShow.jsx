import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import RatingSection from "./RatingSection";
import React, { useState, useEffect } from "react";
import { InertiaLink } from '@inertiajs/inertia-react';
import "../../css/app.css";
import StarRating from "./StarRating";



export default function TopicShow({ auth, topicName, items }) {
    const [filteredItems, setFilteredItems] = useState(items);
    const [ratingFilter, setRatingFilter] = useState(0);

    useEffect(() => {
        if (ratingFilter === 0) {
            setFilteredItems(items);
        } else {
            setFilteredItems(items.filter(item => {
                if (ratingFilter === 3) {
                    return parseFloat(item.rating) >= ratingFilter;
                } else {
                    return parseFloat(item.rating) === ratingFilter;
                }
            }));
        }
    }, [ratingFilter, items]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div>
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        {topicName}
                    </h2>
                </div>
            }
        >
            <Head title="Items" />

            <div className="py-12 mt-5 sm:px-6 lg:px-4">
                <div className="max-w-7xl mb-10 mx-auto sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-sans text-center font-semibold">
                        "{topicName}" Category items
                    </h1>
                </div>
                <div className="sm:flex container mx-10 gap-5">
                    <div className="bg-white dark:bg-gray-800 sm:h-80 h-60 rounded-md border border-gray-500 mb-10 w-full sm:w-2/5 overflow-hidden shadow-sm sm:rounded-lg">
                        <RatingSection onRatingChange={setRatingFilter} />
                    </div>
                    <div className="bg-white dark:bg-gray-800 cursor-pointer rounded-md border-0 border-gray-500 overflow-hidden w-full sm:w-4/5 shadow-sm sm:rounded-lg">
                        <div className="grid grid-cols-1">
                            {filteredItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="mx-8 mt-4 p-4 hoverBorderShadow rounded-lg"
                                >
                                    <InertiaLink
                                        key={item.id}
                                        href={`/items/${item.id}/${encodeURIComponent(item.title)}`}
                                        className="border border-gray-500 rounded-lg hover:shadow-sm hover:-translate-y-1 duration-300 shadow-sm text-gray-800 dark:text-gray-200 dark:bg-gray-900 p-4 flex flex-col"
                                    >
                                        <div className="flex items-center mb-4">
                                            <img
                                                src={item.imagepath}
                                                alt={item.title}
                                                className="w-12 h-12 rounded-lg object-cover"
                                            />
                                            <h2 className="text-xl ml-4 font-bold">
                                                {item.title}
                                                <br />
                                                <StarRating rating={parseFloat(item.rating)} />
                                            </h2>
                                        </div>
                                        <p>{item.description}</p>
                                    </InertiaLink>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer footer-center p-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                <aside>
                    <p>
                        Copyright © 2024 - All rights reserved by ACME Industries Ltd
                    </p>
                </aside>
            </footer>
        </AuthenticatedLayout>
    );
}
