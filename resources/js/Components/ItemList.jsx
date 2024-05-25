import React from "react";
import Item from "./Item";

const ItemList = () => {
    const items = [
        {
            id: 1,
            title: "Item 1",
            description: "Description about item 1",
            logo: "logo1.png",
        },
        {
            id: 2,
            title: "Item 2",
            description: "Description about item 2",
            logo: "logo2.png",
        },
        // Add more items as needed
    ];

    return (
        <div className="w-3/4 p-4">
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ItemList;
