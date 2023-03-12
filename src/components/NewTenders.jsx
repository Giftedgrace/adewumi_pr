import {tendersData} from "../data"
import TenderCard from "./TenderCard"
import React from 'react';

function NewTenders(){
    const tenderCardData = tendersData.map(detailedCategoryData=> {
        return (
            <TenderCard 
                key= {detailedCategoryData.id}
                title={detailedCategoryData.title}
                location={detailedCategoryData.location}
                txt={detailedCategoryData.text}
                id={detailedCategoryData.id}
                startdate={detailedCategoryData.startdate}
                enddate={detailedCategoryData.enddate}
            />
        )
    })

    return(
        <div  id ="new-tenders"className="new-tenders-wrap">
            <h1 className="new-tenders-header">New Tenders</h1>
            <p className="new-tenders-txt">View latest tenders and business opportunities</p>
            <div className="new-tenders-cards">{tenderCardData}</div>
            <button className="new-tenders-btn">Click here to view more</button>
        </div>
    )
}

export default NewTenders