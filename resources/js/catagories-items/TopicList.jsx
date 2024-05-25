import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import topics from "./topics";
import SeriesList from "./SeriesList";
import "../../css/app.css";

const TopicList = () => {
    return (
        <div className="container mx-auto p-4 text-gray-400 dark:text-gray-200">
            <h1 className="text-2xl font-bold mb-4">Explore By Topic</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {topics.map((topic) => (
                    <InertiaLink
                        key={topic.id}
                        href={route("topic.show", { topicName: topic.name })}
                        className="bg-white duration-200 hover-item dark:bg-gray-700 p-4 shadow rounded-lg"
                    >
                        <h2 className="text-xl font-semibold">{topic.name}</h2>
                        <SeriesList series={topic.series} topic={topic} />
                    </InertiaLink>
                ))}
            </div>
        </div>
    );
};

export default TopicList;
