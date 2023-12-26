import React from 'react'
import '../Styles/resultPage.css'
import SearchBar from '../Components/SearchBar'
import FilterSection from '../Components/FilterSection'

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
                        Results
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultPage