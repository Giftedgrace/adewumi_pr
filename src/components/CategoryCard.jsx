import React from 'react';

function CategoryCard(props){
    return(
        <div className="category-card">
        <img src={props.url} alt={props.alt} className="category-img"/>
        <h2 className="category-title">{props.title}</h2>
        <p className="category-txt">{props.txt}</p>
        <button className="category-btn">View More</button>
        </div>
    )
       
        

}

export default CategoryCard