import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import RatingSection from "./RatingSection";

export default function TopicShow({ auth, topicName }) {
    return (
        <>
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
                <Head title={topicName} />

                <div className="py-12 mt-5    sm:px-6 lg:px-4 ">
                    <div className="max-w-7xl mb-10 mx-auto sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-sans  text-center font-semibold ">
                            Catagory item " {topicName} "
                        </h1>
                    </div>
                    <div className="sm:flex container mx-10 gap-5   ">
                        <div className="bg-white dark:bg-gray-800 sm:h-80 h-60 rounded-md  border  border-gray-500  mb-10  w-full sm:w-2/5  overflow-hidden shadow-sm sm:rounded-lg">
                            <RatingSection />
                        </div>
                        <div className="bg-white dark:bg-gray-800 cursor-pointer  rounded-md  border-0  border-gray-500  overflow-hidden w-full sm:w-4/5 shadow-sm sm:rounded-lg">
                            <div className="grid  grid-cols-1 ">
                                <div className="bg-white mx-8 mt-4  border border-gray-500  dark:bg-gray-700 p-4 hover:shadow-xl rounded-lg">
                                    <h1 className="text-lg font-sans   text-start font-semibold ">
                                        Different types of " {topicName} "
                                    </h1>
                                </div>
                                <div className="bg-white mx-8 mt-4  border border-gray-500  dark:bg-gray-700 p-4 hover:shadow-xl rounded-lg">
                                    <h1 className="text-lg font-sans   text-start font-semibold ">
                                        Different types of " {topicName} "
                                    </h1>
                                </div>
                                <div className="bg-white mx-8 mt-4  border border-gray-500  dark:bg-gray-700 p-4 hover:shadow-xl rounded-lg">
                                    <h1 className="text-lg font-sans   text-start font-semibold ">
                                        Different types of " {topicName} "
                                    </h1>
                                </div>
                                <div className="bg-white mx-8 mt-4  border border-gray-500  dark:bg-gray-700 p-4 hover:shadow-xl rounded-lg">
                                    <h1 className="text-lg font-sans   text-start font-semibold ">
                                        Different types of " {topicName} "
                                    </h1>
                                </div>
                                <div className="bg-white mx-8 mt-4  border border-gray-500  dark:bg-gray-700 p-4 hover:shadow-xl rounded-lg">
                                    <h1 className="text-lg font-sans   text-start font-semibold ">
                                        Different types of " {topicName} "
                                    </h1>
                                </div>
                                <div className="bg-white mx-8 mt-4  border border-gray-500  dark:bg-gray-700 p-4 hover:shadow-xl rounded-lg">
                                    <h1 className="text-lg font-sans   text-start font-semibold ">
                                        Different types of " {topicName} "
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
            <footer className="footer footer-center p-4  bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 ">
                <aside>
                    <p>
                        Copyright © 2024 - All right reserved by ACME Industries
                        Ltd
                    </p>
                </aside>
            </footer>
        </>
    );
}
