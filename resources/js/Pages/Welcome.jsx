import MenuComponent from "@/Components/Box";
import ThemeSwitcher from "@/Components/Theme";
import SearchComponent from "@/Components/search";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import "../../css/app.css";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <div className="">
                        <h2 className="font-semibold  mt-5 text-xl text-gray-800 dark:text-gray-200 leading-tight">
                            Homepage
                        </h2>
                    </div>
                }
            >
                <Head title="Home" />

                <div className="w-full">
                    <h1 className="   ml-14  mt-8 text-3xl font-semibold text-gray-900  gradient-text dark:gradient-text  dark:text-gray-200">
                        Read and Write Reviews for Restaurants, Hotels, Apps,
                        and many more
                    </h1>
                    <div className="grid  mt-10 grid-cols-1 md:grid-cols-2 gap-2">
                        <div>
                            <SearchComponent />
                        </div>
                        <div className=" sm:px-6 lg:px-8">
                            <div className=" md:w-fit  w-4/5 mx-auto mt-4  sm:mx-0 border  bg-white dark:bg-gray-800 overflow-hidden shadow-sm  border-gray-500  rounded-lg sm:rounded-lg">
                                <MenuComponent />
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
