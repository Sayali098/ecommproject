import React from 'react';
import './LoginSignup.css'
import { useState } from 'react';

const LogiSignup = () => {

  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});

  }

  const login = async () => {
    console.log("login success",formData)
    let responseData;
    await fetch('http://localhost:3000/login',{
      method:'POST',
      headers:{
      Accept:'application/json',
      "Content-Type":'application/json',
      },
      body:JSON.stringify(formData)

    }).then((response)=>response.json()).then((data)=>responseData=data);

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token)
      window.location.replace('/')
    }
else{
  alert(responseData.errors)
}


  }

  const signup = async () => {
    console.log("signup success",formData)
    let responseData;
    await fetch('http://localhost:3000/signup',{
      method:'POST',
      headers:{
      Accept:'application/json',
      "Content-Type":'application/json',
      },
      body:JSON.stringify(formData)

    }).then((response)=>response.json()).then((data)=>responseData=data);

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token)
      window.location.replace('/')
    }
else{
  alert(responseData.errors)
}


  }

  return (
    <div className='loginSinup'>
      <div className='login-signup-Container'>
        <h1>{state}</h1>
        <div className='login-signup-fields'>
          {state === "Sign up" ? <input type='text' name='username' value={formData.username}
          onChange={changeHandler} placeholder='Your Name'></input> : <></>}
          <input type='email' name='email' value={formData.email}
           onChange={changeHandler}  placeholder='Enter Your Email'></input>
          <input type='password' name='password' value={formData.password} placeholder='Your password'  onChange={changeHandler}></input>

        </div>
        <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>
        {state === "Sign up" ? <p className='login-signup-Login'> Already have an Account?<span onClick={() => { setState("Login") }}>Login here</span></p>
          : <p className='login-signup-Login'> Create an Account?<span onClick={() => { setState("Sign up") }}>Click here</span></p>
        }
        <div className='login-signup-agree'>
          <input type='checkbox' name='' id=''></input>
          <p> By continuing,i agree to  the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LogiSignup