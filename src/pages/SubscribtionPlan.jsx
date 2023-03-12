import React from "react";

function SubscribtionPlan(){
    return(
        <div className="subscription-wrap">
            <div className="subscription-intro">
                <h1 className="subscription-intro-title">Choose The <span className="subscription-intro-highlight">Plan</span> For You</h1>
                <h2 className="subscription-intro-subtitle">We have a customized suitable plan just for you</h2>
                <p className="subscription-intro-txt">You can try U-Tender for free for 15 days, start your trial now, pick a plan later no Credit card required, no obligation, no risk. <a className="subscription-intro-link" href="/">Click here to get started.</a></p>
            </div>
            <div className="choose-plan-wrap">
                <div className="yearly-plan-wrap">
                    <h2 className="plan-recommended">RECOMMENDED</h2>
                    <div className="yearly-plan-details">
                        <h2 className="yearly-plan-header">1 YEAR SUBSCRIPTION</h2>
                        <div className="yearly-plan-span">
                            <span className="yearly-plan-span1">$87.89</span>
                            <span className="yearly-plan-span2">Save 20%</span>
                        </div>
                        <ul className="yearly-plan-list">
                            <li>Dashboard</li>
                            <li>Access to Full Tender</li>
                            <li>Request Extra Information</li>
                            <li>Project Information</li>
                            <li>Download Tenders as PDF</li>
                            <li>Phone & Email Support</li>
                            <li>Alerts up to 2 email IDs</li>
                            <li>Customer care support</li>
                            <li>Contract Awards</li>
                        </ul>
                        <button className="yearly-plan-btn">CHOOSE PLAN</button>
                    </div>
                </div>
                <div className="months-3-plan-wrap">
                        <h2 className="months-3-plan-header">3 MONTH SUBSCRIPTION</h2>
                        <div className="months-3-plan-span">
                            <span className="months-3-plan-span1">$19.99 </span>
                            <span className="months-3-plan-span2">Save 20%</span>
                        </div>
                        <ul className="months-3-plan-list">
                            <li>Dashboard</li>
                            <li>Access to Full Tender</li>
                            <li>Request Extra Information</li>
                            <li>Project Information</li>
                            <li>Download Tenders as PDF</li>
                            <li>Phone & Email Support</li>
                            <li>Alerts up to 2 email IDs</li>
                            <li>Customer care support</li>
                            <li>Contract Awards</li>
                        </ul>
                        <button className="months-3-plan-btn">CHOOSE PLAN</button>
                    </div>
                    <div className="monthly-plan-wrap">
                        <h2 className="monthly-plan-header">1 MONTH SUBSCRIPTION</h2>
                            <span className="monthly-plan-span">$7.99</span>
                        
                        <ul className="monthly-plan-list">
                            <li>Dashboard</li>
                            <li>Access to Full Tender</li>
                            <li>Request Extra Information</li>
                            <li>Project Information</li>
                            <li>Download Tenders as PDF</li>
                            <li>Phone & Email Support</li>
                            <li>Alerts up to 2 email IDs</li>
                            <li>Customer care support</li>
                            <li>Contract Awards</li>
                        </ul>
                        <button className="monthly-plan-btn">CHOOSE PLAN</button>
                  </div>
            </div>
            <div className="subscribe-bizcoin-wrap">
                <h1 className="subscribe-bizcoin-header">Subscribe using your Bizcoin here</h1>
                <div className="subscribe-bizcoin-img-wrap">
                    <img className="subscribe-bizcoin-img" src="https://res.cloudinary.com/dzd9ps2w2/image/upload/q_auto:best/v1678398076/amico_tjalsd.jpg" alt="bizcoin-subscribe"/>
                    <div className="subscribe-bizcoin-txt-wrap">
                        <p className="subscribe-bizcoin-txt">
                        You must have accumulated coins valued at any of the subscription plan
                        </p>
                        <button className="subscribe-bizcoin-btn">CHOOSE PLAN</button>
                        </div>
                    
                </div>
            </div>
        </div>

    )
}

export default SubscribtionPlan