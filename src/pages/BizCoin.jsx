import React from 'react';
function BizCoin(){
    return(
         <div className="bizcoin-page">
            <div className="earn-coin-wrap">
                <div className="earn-coin-intro">
                    <h1 className="earn-coin-header">EARN FREE COINS FOR YOUR U-TENDER SUBSCRIPTION</h1>
                    <p className="earn-coin-txt" >To subscribe on U-Tender is now easier than ever before. As you do not need to spend your own money. Just pick any of our reward process and follow through to start earning. </p>
                </div>
                <div className="earn-coin-img-wrap">
                <img className="earn-coin-img-1" src="https://res.cloudinary.com/dzd9ps2w2/image/upload/q_auto:best/v1678609353/scrimba-react/Ellipse_462_mr2wbs" alt="ellipse"/>
                <img className="earn-coin-img-2" src="https://res.cloudinary.com/dzd9ps2w2/image/upload/q_auto:best/v1678609452/scrimba-react/Group_39875_t0zmcn" alt="earn coin"/>
                </div>
                
            </div>


            <div className="refer-friend-wrap">
            <img className="refer-friend-img" src="https://res.cloudinary.com/dzd9ps2w2/image/upload/q_auto:best/v1678609837/scrimba-react/bro_lwrvim" alt="refer-img"/>
            <div className="refer-friend-intro"  >
                    <h1 className="refer-friend-header" >EARN COINS WHEN YOU REFER A FRIEND</h1>
                    <button className="refer-friend-btn">Share Now</button>
                </div>
               
            </div>


           
            <div className="submit-tender-wrap">
                  <img className="submit-tender-img" src="https://res.cloudinary.com/dzd9ps2w2/image/upload/q_auto:best/v1678609911/scrimba-react/amico_mi52wz"/>

                  <div className="submit-tender-intro" >
                  <h1 className="submit-tender-header">EARN COINS WHEN YOU SUBMIT A TENDER</h1>
                    <button className="
                    submit-tender-btn">Get Started</button>
                  </div>
                   
                </div> 


            <div className="watch-videos-wrap">
            <img className="watch-videos-img" src="https://res.cloudinary.com/dzd9ps2w2/image/upload/q_auto:best/v1678609977/scrimba-react/pana_ssawl5"/>
            <div className="watch-videos-intro">
                    <h1 className="watch-videos-header">EARN COINS WHEN YOU  WATCH AD VIDEOS</h1>
                    <button className="watch-videos-btn">Watch Now</button>
                </div>
               
            </div>

        </div>  
    )
}
export default BizCoin