import React from 'react';

function TenderCard(props){
    
    return(
        <div className="tender-card">
            <div className="tender-title-wrap">
            <h3 className="tender-title">{props.title}</h3>
            <p className="tender-location">{props.location}</p>
            </div>
            <p className="tender-txt">{props.txt}</p>
            <p className="tender-ref">Ref ID:{props.id}</p>
            <p className="tender-date">Date Added:{props.startdate}</p>
            <div className="tender-btn-wrap">
            <p className="tender-date">Deadline:{props.enddate}</p>
            <button className="tender-btn">Click here for more details</button>
            </div>

        </div>

    )
}
export default TenderCard