// src/components/SeriesList.js
import React from "react";

const SeriesList = ({ series , topic  }) => {
    return (
        <div className="mt-2">
            {series.map((item) => (
                console.log(item),
                <div key={item.id} className="mb-2">
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                        {item.items_count} {topic.name}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default SeriesList;
