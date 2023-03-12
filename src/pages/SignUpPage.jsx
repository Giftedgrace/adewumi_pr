
import React from "react";
import { Link } from "react-router-dom";
function SignUpPage(props){
    props.funcNav(false);

    return(
        <div className="form-wrap">
               <form className="form-items">
               <div className="signup-logo">
               <img src="https://res.cloudinary.com/dzd9ps2w2/image/upload/q_auto:best/v1678605556/scrimba-react/Group_39795_msfjwh" alt="logo"className="logo"/>
                   <h3>U-Tender</h3>
               </div>
               <h2 className="signup-txt">It’s fast and free to get started</h2>
               <div className="form-input-items">
               <input type="text" id="name" name="user_name" placeholder="Full name" className="signup-input"/>
               <input type="email" id="mail" name="user_email"  placeholder="Email" className="signup-input"/>
               <input type="text" id="organization" name="organization" placeholder="Organization" className="signup-input"/>
               <input type="text" id="category" name="category" placeholder="Category"className="signup-input" />
               <input type="password" id="password" name="password" placeholder="Password" className="signup-input"/>
               <input type="password" id="confirm password" name="confirm password" placeholder="Confirm Password" className="signup-input"/>
               <button type="submit" className="sign-up-btn">Create your account</button>
               </div>

               <div className="sign-up-bottom">
               <p className="sign-up-terms">By Registering, you agree to U-Tender <a className="sign-up-terms-link" href="/">User Agreement</a> <span className="sign-up-span">and</span> <a className="sign-up-terms-link"  href="/">Cookies & Internet Advertising</a>.</p>
               <p className="">or</p>
               <div className="sign-up-socials">
               <button  type="submit" className="sign-up-socials-btns"><img src="https://res.cloudinary.com/dzd9ps2w2/image/upload/q_auto:best/v1678607243/scrimba-react/google_pgrswv" alt="google"/></button>
               <button type="submit" className="sign-up-socials-btns"><img src="https://res.cloudinary.com/dzd9ps2w2/image/upload/q_auto:best/v1678608015/scrimba-react/Vector_2_rafbxd" alt="facebook"/></button>
               <button  type="submit" className="sign-up-socials-btns"><img src="https://res.cloudinary.com/dzd9ps2w2/image/upload/q_auto:best/v1678608203/scrimba-react/tw_ufjews" alt="twitter"/></button>
               </div>
               <h3 className="sign-up-endline">Already a Member? <Link className="to-sign-in-page" to="/signin">Sign In</Link> </h3>
               </div>
               
               

               
               </form>
        </div>

    )
}

export default SignUpPage