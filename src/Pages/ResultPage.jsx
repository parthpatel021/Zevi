import React, { useState } from 'react'

// Component Imports
import SearchBar from '../Components/SearchBar'
import FilterSection from '../Components/FilterSection';
import ProductCard from '../Components/ProductCard';

// Assets Imports
import resultData from './../assets/resultData';

// CSS Import
import "../Styles/resultPage.css";


const ResultPage = () => {
    // Filter Parametres
    const [filterParameters, setFilterParameters] = useState({
        brand: [],
        priceRange: [],
        rating: [],
    });

    const filteredData = resultData.filter(item => {
        // Filter by brand
        if (filterParameters.brand.length > 0 && !filterParameters.brand.includes(item.brand)) {
            return false;
        }

        // Filter by price range
        for (var i = 0; i < filterParameters.priceRange.length; i++) {
            if (
                filterParameters.priceRange.length > 0 &&
                (item.currPrice < filterParameters.priceRange[i].sPrice || item.currPrice > filterParameters.priceRange[i].ePrice)
            ) {
                return false;
            }
        }

        // Filter by rating
        if (filterParameters.rating.length > 0 && !filterParameters.rating.includes(item.rating)) {
            return false;
        }

        return true;
    });


    const addFilterParameter = (parameterName, filter) => {
        const newFilterParameters = { ...filterParameters };
        newFilterParameters[parameterName].push(filter);
        setFilterParameters(newFilterParameters);
    };

    const removeFilterParameter = (parameterName, filter) => {
        const newFilterParameters = { ...filterParameters };

        newFilterParameters[parameterName] = newFilterParameters[parameterName].filter(
            (item) => item !== filter
        );

        setFilterParameters(newFilterParameters);
    };

    return (
        <div className='result-page'>
            {/* Top Search Bar */}
            <div className="search-bar-container">
                <SearchBar />
            </div>

            <div className='result-h-w'>
                <h2 className='result-h'>Search Results</h2>

                <div className="result-container">

                    {/* Filter Section */}
                    <div className="filters">
                        <FilterSection
                            addFilterParameter={addFilterParameter}
                            removeFilterParameter={removeFilterParameter}
                        />
                    </div>

                    {/* Result Section */}
                    <div className="results">
                        {filteredData.map(result => {
                            return (
                                <ProductCard result={result} key={result.__id} />
                            )
                        })}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ResultPage