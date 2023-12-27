import React, { useState } from 'react'
import SearchBar from '../Components/SearchBar'
import FilterSection from '../Components/FilterSection'
import Stars from '../Components/Stars';
import resultData from './../assets/resultData';

import '../Styles/resultPage.css'
import { Link } from 'react-router-dom';

const ResultComponent = (props) => {
    const { name, imgURL, prevPrice, currPrice, rating, reviewNumber } = props.result;
    const [ liked, setLiked ] = useState(false);
    const [ hover, setHover ] = useState(false);

    return (
        <div className='result-w' onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            <div className='like-w'>
                <div className='like' onClick={() => setLiked(!liked)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M10.0938 5.01172C5.86581 5.01172 3.02734 8.43396 3.02734 12.6602C3.02734 17.4558 9.72721 23.1855 15.4688 27.0117C21.2103 23.1855 27.8327 17.3634 27.9102 12.6602C27.9798 8.43456 25.2436 5.01172 21.0156 5.01172C19.2119 5.01172 17.3826 5.96591 15.4688 7.87891C13.5549 5.96591 11.8975 5.01172 10.0938 5.01172Z" stroke={`${liked ? '' : 'white'}`} fill={`${liked ? '#D32424' : 'none'}`} />
                    </svg>
                </div>
                <div className='product-img-w' style={{ backgroundImage: `url(${imgURL})` }}>
                </div>
                <div className="product-info">
                    <h4 className='product-name'>{name}</h4>
                    <p className='prices'><span className='prev-price'>Rs.{prevPrice}</span> <span className='curr-price'>Rs.{currPrice}</span></p>

                    <p className='review'><Stars rating={rating} /> <span className='review-number'>({reviewNumber})</span></p>
                </div>
                <div className='view-product-btn-w' style={{display: `${hover ? 'flex' : 'none'}`}}>
                    <Link className='view-product-btn'>
                        View Product
                    </Link>
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
                            return (
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