// resources/js/Pages/Show.jsx

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import TopicList from "@/catagories-items/TopicList";
import React from 'react';

export default function Show({ auth, catagories }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div>
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Categories
                    </h2>
                </div>
            }
        >
            <Head title="Categories" />

            <div className="py-12">
                <section className="h-80">
                    <h1 className="text-3xl sm:text-center ml-6 font-semibold uppercase">
                        What are you looking for
                    </h1>

                    <div className="flex justify-center mt-10 px-5">
                        <div className="relative w-full max-w-md">
                            <input
                                className="w-full p-2 pl-10 border border-gray-500 rounded-xl focus:ring-0 bg-white dark:bg-gray-800"
                                type="search"
                                placeholder="Search categories"
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
                        </div>
                    </div>
                </section>
                <section className="mt-2">
                    <h1 className="text-3xl ml-6 mb-16 font-semibold uppercase">
                        All categories are listed here
                    </h1>
                    <div>
                        <TopicList catagories={catagories} />
                    </div>
                </section>
                <hr className="mx-32 mt-10 border-gray-600" />
            </div>
        </AuthenticatedLayout>
    );
}
