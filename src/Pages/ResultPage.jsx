import React from 'react'
import SearchBar from '../Components/SearchBar'
import FilterSection from '../Components/FilterSection'
import resultData from './../assets/resultData';
import ProductCard from '../Components/ProductCard';

import "../Styles/resultPage.css";

const ResultPage = () => {
    return (
        <div className='result-page'>
            <div className="search-bar-container">
                <SearchBar />
            </div>
            <div className='result-h-w'>
                <h2 className='result-h'>Search Results</h2>

                <div className="result-container">
                    <div className="filters">
                        <FilterSection />
                    </div>
                    <div className="results">
                        {resultData.map(result => {
                            return (
                                <ProductCard result={result} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultPage