import {howData} from "../data"
import WorkCard from "../components/WorkCard"
import React from 'react';


function WorkMethod(){
    const workData = howData.map(workCardItem =>{
        return(
            <WorkCard 
            key={workCardItem.id}
            image={workCardItem.image}
            title={workCardItem.title}
            text={workCardItem.text}
            alt={workCardItem.title}
       /> )
    })
    return(
        <div className="work-card-wrap">
            <h1 className="work-heading">How it works</h1>
            <div className="work-card-clust">{workData}</div>
        </div>
         
    )
}

export default WorkMethod