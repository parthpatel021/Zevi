import React from 'react'
import SearchBar from '../Components/SearchBar'
import FilterSection from '../Components/FilterSection'
import Stars from '../Components/Stars';
import resultData from './../assets/resultData';

import '../Styles/resultPage.css'

const ResultComponent = (props) => {
    const {name, imgURL, prevPrice, currPrice, rating, reviewNumber} = props.result;

    return (
        <div className='result-w'>
            <div className='like-w'>
                <div className='like'></div>
                <div className='product-img-w' style={{ backgroundImage: `url(${imgURL})` }}>
                </div>
                <div className="product-info">
                    <h4 className='product-name'>{name}</h4>
                    <p className='prices'><span className='prev-price'>Rs.{prevPrice}</span> <span className='curr-price'>Rs.{currPrice}</span></p>

                    <p className='review'><Stars rating={rating} /> <span className='review-number'>({reviewNumber})</span></p>
                </div>
            </div>

        </div>
    )
}

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
                            return(
                                <ResultComponent result={result} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultPage