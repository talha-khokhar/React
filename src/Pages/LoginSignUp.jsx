import React from 'react'
import './CSS/LoginSignUp.css';

const LoginSignUp = () => {
  return (
    <>
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className='loginsignup-fileds'>
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Your Password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login Here</span></p>
        <div className='loginsignup-agree'>
          <input type="checkbox" />
          <p>By continuing, i agree to the term of use & privacy policy</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default LoginSignUp;