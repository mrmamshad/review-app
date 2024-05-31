import { InertiaLink, Head } from '@inertiajs/inertia-react';


const TopicList = ({ catagories }) => {
    if (!catagories || !Array.isArray(catagories)) {
        return <div>No categories available</div>;
    }

    return (
        <div className="container mx-auto p-4 text-gray-400 dark:text-gray-200">
            <h1 className="text-2xl font-bold mb-4">Explore By Topic</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {catagories.map((category) => (
                    <InertiaLink
                        key={category.id}
                        href={`/topics/${category.id}/${encodeURIComponent(category.title)}`}
                        className="border border-gray-500 rounded-lg hover:bg-slate-400 hover:-translate-y-1 duration-300 shadow-sm text-gray-800 dark:text-gray-200 dark:bg-gray-900 p-4 flex flex-col"
                    >
                        <div className="flex items-center mb-4">
                            <img
                                src={category.imagepath}
                                alt={category.title}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <h2 className="text-xl ml-4 font-bold">{category.title}</h2>
                        </div>
                        <p>{category.description}</p>
                    </InertiaLink>
                ))}
            </div>
        </div>
    );
};

export default TopicList;
