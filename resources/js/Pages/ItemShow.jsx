import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Rating } from "@mui/material";
import "../../css/app.css";
import { Inertia } from "@inertiajs/inertia";

export default function Show({ auth, itemid, topicTitle, item, submitedReview }) {
    console.log(submitedReview);
    const [formData, setFormData] = useState({
        username: "",
        comment: "",
        rating: 0,
    });

    const filteredShow = item.filter((item) => item.id == itemid);

    const handleRatingChange = (event, newValue) => {
        setFormData({
            ...formData,
            rating: newValue,
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        Inertia.post("/formData", formData);
    };

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

            <div className="container space-y-4 text-gray-800 dark:text-gray-200 mx-auto mt-4">
                <div className="flex items-center p-8 border-b border-b-gray-600">
                    <img
                        className="w-20 h-20 rounded-lg object-cover"
                        src={filteredShow[0].imagepath}
                        alt=""
                    />
                    <div className="ml-6">
                        <h2 className="text-2xl ml-6 font-bold text-center">
                            {topicTitle}
                        </h2>
                        <div className="ml-16 text-yellow-500">
                            <Rating
                                value={parseFloat(item[0].rating)}
                                precision={0.5}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="p-4 border-b border-b-gray-600"
                >
                    <div className="flex items-center space-x-4">
                        <Rating
                            name="user-rating"
                            value={formData.rating}
                            precision={0.5}
                            onChange={handleRatingChange}
                        />
                    </div>
                    <br />
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full">
                            <FaUserAlt />
                        </div>
                        <div className="w-full">
                            <input
                                type="text"
                                name="username"
                                className="w-full sm:w-2/4 rounded-xl dark:bg-gray-800 p-2 border"
                                placeholder="Write your name"
                                value={formData.username}
                                onChange={handleChange}
                            />
                            {formData.username && (
                                <div className="mt-4">
                                    <input
                                        type="text"
                                        name="comment"
                                        className="w-full sm:w-2/4 rounded-xl dark:bg-gray-800 p-2 border border-gray-500"
                                        placeholder="Write a review"
                                        value={formData.comment}
                                        onChange={handleChange}
                                    />
                                     <button className="ml-4 md:ml-16 bg-blue-500  text-white px-4 py-2 hover:bg-blue-900 duration-300 rounded-xl">
                                Review
                            </button>
                                </div>
                            )}

                        </div>
                    </div>
                </form>

                {submitedReview.map(reviewmsg => (
                    <div className="p-4 border-b border-b-gray-600">
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full">
                            <FaUserAlt />
                        </div>
                        <div className="ml-4">
                            <div className="font-bold">{reviewmsg.username}</div>
                            <div className="text-yellow-500">
                                <Rating value={reviewmsg.rating} precision={0.5} readOnly />
                            </div>
                            <div className="mt-2">{reviewmsg.comment}</div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
