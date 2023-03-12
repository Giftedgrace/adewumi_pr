
import React from "react";
import { Link } from "react-router-dom";
function SignInPage(props){
    props.funcNav(false);

    return(
        <div className="sign-in-form-wrap">
               <form className="sign-in-form-items">
               <div className="sign-in-logo">
               <img src="https://res.cloudinary.com/dzd9ps2w2/image/upload/q_auto:best/v1678605556/scrimba-react/Group_39795_msfjwh" alt="logo"className="logo"/>
                   <h3>U-Tender</h3>
               </div>
               <div className="form-input-items">
               
               <input type="email" id="mail" name="user_email"  placeholder="Email" className="sign-in-input"/>
               
               <input type="password" id="password" name= "password" placeholder="Password" className="sign-in-input"/>
               <div className="remember-me-wrap">
               <label><input type="checkbox"  name="remember"/> Remember me</label>
               <span > <a className="forget-psw" href="/"> Forgot password?</a> </span>
                
               </div>
       
               <button type="submit" className="sign-in-btn">Sign In</button>
               </div>

               <div className="sign-up-bottom">
               
               <p className="">or</p>
               <div className="sign-up-socials">
               <button type="submit" className="sign-up-socials-btns"><img src="https://res.cloudinary.com/dzd9ps2w2/image/upload/q_auto:best/v1678607243/scrimba-react/google_pgrswv" alt="google"/></button>
               <button type="submit" className="sign-up-socials-btns"><img src="https://res.cloudinary.com/dzd9ps2w2/image/upload/q_auto:best/v1678608015/scrimba-react/Vector_2_rafbxd" alt="facebook"/></button>
               <button type="submit" className="sign-up-socials-btns"><img src="https://res.cloudinary.com/dzd9ps2w2/image/upload/q_auto:best/v1678608203/scrimba-react/tw_ufjews"  alt="twitter"/></button>
               </div>
               <h3 className="sign-in-endline">Not a Member? <Link className="to-sign-up" to="/signup">Sign Up here</Link></h3>
               </div>
               
               

               
               </form>
        </div>

    )
}

export default SignInPage