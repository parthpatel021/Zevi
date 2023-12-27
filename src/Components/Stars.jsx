import React, { useEffect, useState } from 'react'

const Stars = ({ rating }) => {
    const [ratingArr, setRatingArr] = useState([0, 0, 0, 0, 0]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        var rat = rating;
        setRatingArr(ratingArr.map((prev) => {
            if (rat-- > 0)
                return 1;
            return prev;
        }))
    }, []);

    return (
        <>
            {ratingArr.map(star => {
                return (
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill={`${star === 1 ? '#FDD33D' : '#CDCCC8'}`} />
                    </svg>
                )
            })}
        </>
    )
}

export default Stars