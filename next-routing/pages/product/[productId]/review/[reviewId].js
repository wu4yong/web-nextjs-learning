import React from 'react';
import { useRouter } from "next/router";

const Review = () => {
    const { query: { reviewId, productId } } = useRouter();
    return (
        <h2>
            Review {reviewId} of product {productId}
        </h2>
    );
};

export default Review;
