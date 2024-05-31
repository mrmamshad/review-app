import React from "react";

function StarRating({ rating }) {
    console.log(rating)
    const totalStars = 5;
    const filledStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = totalStars - filledStars - halfStar;

    return (
        <div className="star-rating">
            {Array(filledStars).fill().map((_, i) => (
                <span key={`filled-${i}`} className="text-yellow-500">★</span>
            ))}
            {halfStar === 1 && <span className="text-yellow-500">☆</span>}
            {Array(emptyStars).fill().map((_, i) => (
                <span key={`empty-${i}`} className="text-gray-400">★</span>
            ))}
        </div>
    );
}

export default StarRating;
