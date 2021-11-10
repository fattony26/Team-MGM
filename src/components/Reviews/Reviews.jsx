import React from 'react';
import { FaStar } from 'react-icons/fa'

const StarRating = () => {
    return <div>
        {[...Array(5)].map((star, idx) => {
            const ratingValue = idx + 1
            return <label>
                <input hidden type="radio" name="rating" value={ratingValue} />
                <FaStar className="star" size={50} />
            </label>
        })}
    </div>
}

export default StarRating