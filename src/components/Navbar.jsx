
import SelectLang from "./SelectLang"
import React from 'react';
import { Link } from "react-router-dom";



function Navbar(){
    
   return(
       <nav className="nav-wrapper" >
           <div>
           <ul className="upper-nav">
               <li className="upper-nav-item"> <Link className="upper-nav-hyperlinks" to="/subscribtion">Subscribe</Link></li>
               <li className="upper-nav-item"><a className="upper-nav-hyperlinks" href="#contact-us">Contact Us</a></li>
               <li className="upper-nav-item"><SelectLang/></li>
               <li className="upper-nav-item"> <Link className="upper-nav-hyperlinks" to="/signup">Create account    <img src="https://res.cloudinary.com/dzd9ps2w2/image/upload/q_auto:best/v1678605799/Vector_xihilc" alt="user"/></Link></li>
               </ul>
           </div>
             
              
           <div className="lower-nav" >
               <div className="logo-wrap">
               <img src="https://res.cloudinary.com/dzd9ps2w2/image/upload/q_auto:best/v1678605556/scrimba-react/Group_39795_msfjwh" alt="logo"className="logo"/>
                   <h3>U-Tender</h3>
               </div>
                  
               <ul className="lower-nav-list">
                   <li className="upper-nav-item"><Link className="lower-nav-hyperlinks" to="/">Home</Link> </li>
                   <li className="upper-nav-item">About Us  </li>
                   <li className="upper-nav-item">Tenders</li>
                   <li className="upper-nav-item"><Link className="lower-nav-hyperlinks" to="/publishtenders">Publish Tenders</Link></li>
                   <li className="upper-nav-item"><Link  className="lower-nav-hyperlinks" to="/bizcoin">BizCoin</Link></li>
                   <li className="upper-nav-item"> <Link className="lower-nav-hyperlinks" to="/signin">Sign in</Link></li>
               </ul>
           </div>
       </nav>
   )
}


export default Navbar
