import React from 'react';

function Searchbar(){
    return(
        <div className="search-wrap">
            <h1 className="search-header">Africa SME Tenders</h1>
            <h3 className="search-description">Search Africa’s largest pool of tenders opportunities </h3>
            <form >
                  <input className="search-field" type="text" placeholder="Enter keywords to search" name="search"/>
                  <button className="search-btn">Search</button>
             </form>
        </div>
    )
} 

export default Searchbar