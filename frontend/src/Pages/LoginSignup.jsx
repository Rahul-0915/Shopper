import React, { useState } from 'react'
import './CSS/LoginSignup.css'
export default function LoginSignup() {
  const [state, setState] = useState("Login");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async () => {
    console.log("Login Function Excuted",formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success)
    {
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");

    }
    else{
      alert(responseData.errors);
    }
  }
  const signup = async () => {
    console.log("Signup Function Excuted",formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success)
    {
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");

    }
    else{
      alert(responseData.errors);
    }
  }


  return (
    // main box
    <div className='loginsignup'>
      {/* form box */}
      <div className="loginsignup-container">
        <h1>{state}</h1>
        {/* fildes */}
        <div className="loginsignup-fields">
          {state === "Sign Up" ? <input  type="text" name="username" value={formData.username} onChange={changeHandler} id="" placeholder='UserName' /> : <></>}
          <input type="email" name="email" value={formData.email} onChange={changeHandler} id="" placeholder='Email Address' />
          <input type="password" name="password" value={formData.password} onChange={changeHandler} id="" placeholder='Password' />
        </div>
        <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>
        {state === "Sign Up" ? <p className='loginsignup-login'>Alrady have an account ?  <span onClick={() => { setState("Login") }}> Login here</span></p> : <p className='loginsignup-login'>Create an Account ?<span onClick={() => { setState("Sign Up") }}>Click here</span></p>}


        {/* text  */}
        <div className="loginsginup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing,i agree to the terems of the use & privacy Policy.</p>
        </div>
      </div>

    </div>
  )
}
