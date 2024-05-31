import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import StarRating from "./StarRating";

export default function Show({ auth, itemid, topicTitle, item }) {

    const filteredShow = item.filter((item) => item.id == itemid);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div>
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        {topicTitle}
                    </h2>
                </div>
            }
        >
            <Head title="Profile" />

            <div>
                <div className="container  space-y-4 text-gray-800 dark:text-gray-200 mx-auto mt-4">
                    <div className="flex items-center  p-4 border-b border-b-gray-600 ">
                        <img
                            className="w-16 h-16   rounded-lg  object-cover"
                            src={filteredShow[0].imagepath}
                            alt=""
                        />

                        <div className="ml-4 ">
                            <h2 className="text-xl ml-28 font-bold text-center ">{topicTitle}</h2>
                            <div className="text-yellow-500">
                                {console.log(parseFloat(item[0].rating))}
                                <StarRating rating={parseFloat(item[0].rating)} />
                                </div>
                        </div>
                    </div>
                    <div className="p-4 border-b  border-b-gray-600 ">
                        <div className="flex items-center">
                            <div className="w-10 h-10  rounded-full">
                            <FaUserAlt />
                            </div>
                            <div className="ml-4 flex-1">
                                <input
                                    type="text"
                                    className="w-full  rounded-xl dark:bg-gray-800 p-2 border"
                                    placeholder="Write a review"
                                />
                            </div>
                            <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded">
                                Review
                            </button>
                        </div>
                    </div>
                    <div className="p-4 border-b border-b-gray-600 ">
                        <div className="flex items-center">
                            <div className=" w-10 h-10  rounded-full">
                            <FaUserAlt />
                            </div>
                            <div className="ml-4">
                                <div className="font-bold">Username</div>
                                <div className="text-yellow-500">
                                    Reviewed Stars
                                </div>
                                <div className="mt-2">Review Message</div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 border-b  border-b-gray-600 ">
                        <div className="flex items-center">
                            <div className="w-10 h-10  rounded-full">
                            <FaUserAlt />
                            </div>
                            <div className="ml-4">
                                <div className="font-bold">Username</div>
                                <div className="text-yellow-500">
                                    Reviewed Stars
                                </div>
                                <div className="mt-2">Review Message</div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 border-b  border-b-gray-600 ">
                        <div className="flex items-center">
                            <div className="w-10 h-10  rounded-full">
                            <FaUserAlt />
                            </div>
                            <div className="ml-4">
                                <div className="font-bold">Username</div>
                                <div className="text-yellow-500">
                                    Reviewed Stars
                                </div>
                                <div className="mt-2">Review Message</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
