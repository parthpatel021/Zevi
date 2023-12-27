import React, { useEffect, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Stars from './Stars';

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

const RatingFilter = ({ rating }) => {
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
            
            <div className='star-w' onClick={handleChange}>
                <Stars rating={rating} />
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
                            <RatingFilter rating={rat} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default FilterSection