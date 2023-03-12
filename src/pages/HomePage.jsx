import Searchbar from "../components/Searchbar";
import WorkMethod from "../components/WorkMethod";
import TopCategories from "../components/TopCategories"
import NewTenders from "../components/NewTenders"
import PremiumPlan from "../components/PremiumPlan"
import Sponsers from "../components/Sponsers"
import React from 'react';

function HomePage(){
    
    return(
        <div>
            <Searchbar/>
            <WorkMethod/>
            <TopCategories/>
            <NewTenders/>
            <PremiumPlan/>
            <Sponsers/>
        </div>
    )
}

export default HomePage