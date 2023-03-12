import React from 'react';

function Sponsers(){
    return(
        <div className="sponsers-wrap">
            <h2 className="sponsers-title">We are proudly sponsored by:</h2>
            <div className="sponsers-links">
            <a href="https://tech4dev.com/index.html" target="_blank" rel="noopener noreferrer">
                <img src="https://d33wubrfki0l68.cloudfront.net/727f448d48a1cc18fc7e290c45a85759b68eef9c/f0f6e/assets/images/logo.svg" alt="tech4dev-logo" className="sponser-logo"/>
            </a>
            <a href="https://www.microsoft.com/en-eg/" target="_blank" rel="noopener noreferrer">
                <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" alt="microsoft-logo" className="sponser-logo"/>
            </a>
            <a href="https://www.isdb.org/" target="_blank" rel="noopener noreferrer">
                <img src="https://getlogo.net/wp-content/uploads/2019/11/islamic-development-bank-isdb-logo-vector.png" alt="isdb-logo" className="sponser-logo"/>
            </a>

            <a href="https://fintech-egypt.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://fintech-egypt.com/img/logo.png" alt="fintech-logo" className="sponser-logo"/>
            </a>

            </div>
        </div>

    )
}

export default Sponsers