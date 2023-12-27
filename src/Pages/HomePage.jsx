/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { latestTrendData, popularSuggestionData } from '../assets/latestTrendData.js'
import SearchBar from '../Components/SearchBar.jsx';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    const [activeSuggestion, setActiveSuggestion] = useState(false);


    const handleClick = () => {
        navigate('/result');
    }

    return (
        <div className='home'>
            {/* Search - Bar */}
            <div className='search-container'>
                <SearchBar setActiveSuggestion={setActiveSuggestion} />
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
                                        <div className='trend' onClick={handleClick}>
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
                                        <p onClick={handleClick}>{suggestion}</p>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    :
                    <></>
                }
            </div>

        </div>
    )
}

export default HomePage