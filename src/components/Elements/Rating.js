import React from 'react'

export const Rating = ({rating}) => {
    let ratingArray = Array(5).fill(false);
    for(let i=0; i<rating; i++){
        ratingArray[i] = true;
    }


  return (
    <div className="flex items-center my-2">
        {ratingArray.map((value, index) => (
           value ? (
            <i key={index} className="text-lg text-yellow-500 bi bi-star-fill mr-1"></i>
              ) : (
            <i key={index} className="text-lg text-yellow-500 bi bi-star mr-1"></i>
           )
        ))}
    </div>
    )
}
