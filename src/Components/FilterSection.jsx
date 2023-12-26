import React, { useEffect, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

const filterCatagoryData = [
    {
        name: 'Brand',
        filters: [
            'Mango',
            'H&M',
        ]
    },
    {
        name: 'Price Range',
        filters: [
            'Under 500',
            '1000 To 3000',
        ]
    },

];

const ratingFilters = [5, 4, 3, 2, 1];

const FilterMenu = ({ filter }) => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <div className='filter'>
            <Checkbox
                onClick={handleChange}
                checked={checked}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <p onClick={handleChange} style={{ fontWeight: `${checked ? '500' : '300'}` }}>{filter}</p>
        </div>

    );
}

const RatingFilter = ({ rat }) => {
    const [checked, setChecked] = React.useState(false);
    const [ratingArr,setRatingArr] = useState([0, 0, 0, 0, 0]);

    const handleChange = () => {
        setChecked(!checked);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        var rating = rat;
        setRatingArr(ratingArr.map((prev) => {
            if(rating-- > 0)
                return 1;
            return prev;
        }))
    }, []);

    return (
        <div className='filter'>
            <Checkbox
                onClick={handleChange}
                checked={checked}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            
            <div className='star-w' onClick={handleChange}>
                {ratingArr.map(star => {
                    return (
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill={`${star===1 ? '#FDD33D' : '#CDCCC8'}`} />
                        </svg>
                    )
                })}
            </div>

        </div>
    )
}

const FilterSection = () => {
    return (
        <div className='filter-section'>
            {filterCatagoryData.map(({ name, filters }) => {
                return (
                    <div className='filter-h-w'>
                        <h4 className='filter-h'>{name}</h4>
                        {filters.map(filter => {
                            return <FilterMenu filter={filter} />
                        })}
                    </div>
                )
            })}
            <div className='filter-h-w'>
                <h4 className='filter-h'>Ratings</h4>
                <div className='star-w'>
                    {ratingFilters.map(rat => {
                        return (
                            <RatingFilter rat={rat} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default FilterSection