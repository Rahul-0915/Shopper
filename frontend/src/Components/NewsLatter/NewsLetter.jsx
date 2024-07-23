import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
      //newsletter div
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated.</p>
      <div>
            {/* email id input */}
            <input type="email" name="" id="" placeholder='Your Email Id'/>
            <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
