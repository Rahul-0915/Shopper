import React from 'react'
import './CSS/LoginSignup.css'
export default function LoginSignup() {
  return (
    // main box
    <div className='loginsignup'>
      {/* form box */}
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        {/* fildes */}
        <div className="loginsignup-fields">
          <input type="text" name="" id="" placeholder='UserName' />
          <input type="email" name="" id="" placeholder='Email Address' />
          <input type="password" name="" id="" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Alrady have an account? <span>Login here</span></p>
        {/* text  */}
        <div className="loginsginup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing,i agree to the terems of the use & privacy Policy.</p>
        </div>
      </div>

    </div>
  )
}
