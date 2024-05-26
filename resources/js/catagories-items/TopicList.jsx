import React from 'react';
import { InertiaLink, Head } from '@inertiajs/inertia-react';

const TopicList = ({ catagories }) => {
    if (!catagories || !Array.isArray(catagories)) {
        return <div>No categories available</div>;
    }

    return (
        <div className="container mx-auto p-4 text-gray-400 dark:text-gray-200">
            <h1 className="text-2xl font-bold mb-4">Explore By Topic</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
                {catagories.map((category) => (
                    <InertiaLink key={category.id} href={route("topic.show", { topicName: category.title })}>
                        <div className="border border-gray-500 p-4 rounded-lg hover:shadow-md hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                            <div className="flex items-center mb-2">
                                <img
                                    src={category.imagepath}
                                    alt={category.title}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <h2 className="text-3xl ml-5 font-bold">{category.title}</h2>
                            </div>
                            <p className="flex-grow">{category.description}</p>
                        </div>
                    </InertiaLink>
                ))}
            </div>
        </div>
    );
};

export default TopicList;
