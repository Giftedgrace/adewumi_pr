import {categoriesData} from "../data"
import CategoryCard from "./CategoryCard"
import React from 'react';


function TopCategories(){
    const categoryCardData = categoriesData.map(detailedData => {
       return(
        <CategoryCard
        key = {detailedData.id}
        url={detailedData.image}
        title={detailedData.title}
        alt={detailedData.title}
        txt={detailedData.text}
        />
       )
       
    }) 
    return(
        <div className="top-categories-wrap">
            <h1 className="top-categories-header">Top Categories</h1>
            <p className="top-categories-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <div className="top-categories-cards">{categoryCardData}</div>
        </div>
    )
}

export default TopCategories