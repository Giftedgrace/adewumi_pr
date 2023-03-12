import React from 'react';
function PublishTenders(){
    return(
     <div className="publish-tenders-wrap">
        <h1 className="publish-tenders-header">Publish Your Tenders</h1>
        <p className="publish-tenders-txt">Reach out to the targeted audience, and get quick and quality response from suppliers, service providers and consultants across Africa.</p>
        <form className="publish-tenders-form">
            <h2 className="publish-tenders-form-header">FILL THE FORM BELOW</h2>
        <label  className="publish-tenders-form-label" for="name">Name  </label>
        <input className="publish-tenders-form-input"  type="text" id="name" name="user_name"/>
        <label className="publish-tenders-form-label"  for="organization">Name of Organisation/ Company <span className="form-star">*</span></label>
        <input className="publish-tenders-form-input"  type="text" id="organization" name="organization"/>
        <label className="publish-tenders-form-label"  for="email">Email <span className="form-star">*</span></label>
        <input className="publish-tenders-form-input"  type="email" id="email" name="email"/>
        <label className="publish-tenders-form-label"  for="phone">Phone <span className="form-star">*</span></label>
        <input className="publish-tenders-form-input-1"  type="tel" id="phone" name="phone"/>
        <label className="publish-tenders-form-label"  for="category">Category</label>
        <select className="publish-tenders-form-input-1"  name="category" id="category">
                <option value="electronics">Electronics</option>
                <option value="furniture">Furniture</option>
                <option value="logistics">Logistics</option>
                <option value="media/marketing">Media/Marketing</option>
        </select>
        <label className="publish-tenders-form-label"  for="file">Upload Documents <span className="form-star">*</span></label>
        <input className="publish-tenders-form-input"  type="file" id="file" name="file" />
        <label className="publish-tenders-form-label"  for="message">Message/Comment</label>
        <textarea className="form-text-area" id="message" name="message" placeholder="Add message here"></textarea>


<div >
<label class="not-robot-wrap" for="check">
            <input type="checkbox" class="checkbox" id="check"/>
            <span class="checkbox-text">I'm not a robot</span>
        </label>

</div>
        <button className="publish-tenders-btn" type="submit">SUBMIT</button>
        </form>
     </div>
    )
}

export default PublishTenders