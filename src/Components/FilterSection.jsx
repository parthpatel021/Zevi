import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import filterData from '../assets/filterData';
import "../Styles/resultPage.css"


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

const FilterCategoryComponent = (props) => {
    const { name, filters } = props.data;
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    return (
        <div className='filter-h-w'>
            <div className='filter-top' onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                <h4 className='filter-h'>{name}</h4>
                <div className='menu-deopdown-icon-w'
                    style={{transform: `${isDropDownOpen? 'rotate(180deg)' : 'rotate(0)'}`}}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12.71 14.8299L16.95 10.5899C17.0437 10.497 17.1181 10.3864 17.1689 10.2645C17.2197 10.1427 17.2458 10.012 17.2458 9.87994C17.2458 9.74793 17.2197 9.61723 17.1689 9.49537C17.1181 9.37351 17.0437 9.26291 16.95 9.16994C16.7626 8.98369 16.5092 8.87915 16.245 8.87915C15.9808 8.87915 15.7274 8.98369 15.54 9.16994L12 12.7099L8.45999 9.16994C8.27263 8.98369 8.01918 8.87915 7.75499 8.87915C7.4908 8.87915 7.23735 8.98369 7.04999 9.16994C6.95731 9.26338 6.88398 9.3742 6.83422 9.49604C6.78445 9.61787 6.75923 9.74834 6.75999 9.87994C6.75923 10.0115 6.78445 10.142 6.83422 10.2638C6.88398 10.3857 6.95731 10.4965 7.04999 10.5899L11.29 14.8299C11.383 14.9237 11.4936 14.9981 11.6154 15.0488C11.7373 15.0996 11.868 15.1257 12 15.1257C12.132 15.1257 12.2627 15.0996 12.3846 15.0488C12.5064 14.9981 12.617 14.9237 12.71 14.8299Z" fill="#2F3037" />
                    </svg>
                </div>
            </div>
            <div className='filter-content'
                // style={{transform: `${isDropDownOpen? 'translateY(0%)' : 'translateY(-100%)'}`}}
            >
                {filters.map(filter => {
                    return <FilterMenu filter={filter} />
                })}
            </div>
        </div>
    );
}

const FilterSection = () => {
    return (
        <div className='filter-section'>
            {filterData.map((data) => {
                return (
                    <FilterCategoryComponent data={data} />
                )
            })}
        </div>
    )
}

export default FilterSection