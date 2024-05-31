import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import TopicList from "@/catagories-items/TopicList";
import React from 'react';
import "../../css/app.css";


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
                <section className="mt-2">
                    <h1 className="text-3xl ml-6 mb-16 font-semibold gradient-text  uppercase">
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
