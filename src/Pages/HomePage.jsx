/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useEffect, useState } from 'react'
import { latestTrendData, popularSuggestionData } from '../assets/latestTrendData.js'

const inputRef = React.createRef();
const HomePage = () => {
    const [activeSuggestion, setActiveSuggestion] = useState(false);

    return (
        <div className='home'>
            {/* Search - Bar */}
            <div className='search-container'>
                <input type='search' placeholder='Search' onFocus={() => setActiveSuggestion(true)} />
                <div className="search-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 42 42" fill="none">
                        <path d="M20.5921 36.3226C29.2799 36.3226 36.3228 29.2797 36.3228 20.5918C36.3228 11.904 29.2799 4.86108 20.5921 4.86108C11.9042 4.86108 4.86133 11.904 4.86133 20.5918C4.86133 29.2797 11.9042 36.3226 20.5921 36.3226Z" stroke="#200E32" stroke-opacity="0.4" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M31.5317 32.3484L37.6987 38.4996" stroke="#200E32" stroke-opacity="0.4" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>

            {/* Search - Results */}
            <div className='search_results-container'>
                {activeSuggestion ?
                    <div className='search-suggestion-container'>
                        <div className='latest-trends-container'>
                            <h3>Latest Trends</h3>
                            <div className="tends-conatiner">
                                {latestTrendData.map(({ name, imgURL }) => {
                                    return (
                                        <div className='trend'>
                                            <img src={imgURL} />
                                            <p>{name}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className='popular-suggestions-container'>
                            <h3>Popular suggestions</h3>
                            <div className='suggestion-container'>
                                {popularSuggestionData.map((suggestion) => {
                                    return (
                                        <p>{suggestion}</p>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    :
                    <></>
                }
            </div>

            <div className='logo' />
        </div>
    )
}

export default HomePage