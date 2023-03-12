import React from 'react';


function Footer (){
    return(
        <footer className="footer-wrap">
            <div className='footer-lists'>
            <ul id="contact-us"className='footer-list-items'>
                <li>Call Us:+234-904-329-8729</li>
                <li>Email:u-tender@email.com</li>
                <li>Opening Hours: 8:00 - 20:00, Monday - Sunday</li>
            </ul>
              <div>
                <h2 classN>Popular Tenders</h2>
                <ul className='footer-list-items' >
                    <li>Furniture Tenders</li>
                    <li>Logistics Tenders</li>
                    <li>Media/Marketing Tenders</li>  
                </ul>
              </div>
              <div>
                <h2>Useful Links</h2>
                <ul className='footer-list-items'>
                    <li>Open Tenders</li>
                    <li>Publish Tenders</li>
                    <li>How it Works</li>
                    <li>Earn Bizcoins</li>
                    <li>Terms& Conditions</li>
                </ul>
              </div>
              <div>
                <h2>Help</h2>
                <ul className='footer-list-items'>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Sitemap</li>
                <li>Blogs</li>
                <li>Disclaimer</li>
                </ul>   
              </div>
            </div>
              <div className="footer-bottom">
                <p>©{(new Date().getFullYear())}, All rights reserved by U-Tender</p>
                <img src="https://res.cloudinary.com/dzd9ps2w2/image/upload/q_auto:best/v1678475564/Payment_tunvea" alt="payment"/>


                <div className='footer-icons-wrap'>
                <a href="https://www.facebook.com/Tech4DevHQ/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" className='footer-social-icons'>
               <img src="https://res.cloudinary.com/dzd9ps2w2/image/upload/v1678473183/facebook_lkbf9q.png" alt="facebook"/>
               </a>


               <a href="https://www.linkedin.com/school/tech4dev/" target="_blank" rel="noopener noreferrer" className='footer-social-icons'>
               <img src="https://res.cloudinary.com/dzd9ps2w2/image/upload/v1678525308/linkedin_s69m8j"/>
               </a>


               <a href="https://www.instagram.com/tech4dev/" target="_blank" rel="noopener noreferrer" className='footer-social-icons'>
               <img src="https://res.cloudinary.com/dzd9ps2w2/image/upload/q_auto:best/v1678525679/instagram_sdjro3.png" alt="instagram"/>
               </a>


               <a href="https://twitter.com/tech4devhq" target="_blank" rel="noopener noreferrer" className='footer-social-icons'>
               <img src="https://res.cloudinary.com/dzd9ps2w2/image/upload/q_auto:best/v1678525757/twitter_t3hgm4" alt="twitter"/>
               </a>
                </div>

              </div>
        </footer>
    )
}

export default Footer