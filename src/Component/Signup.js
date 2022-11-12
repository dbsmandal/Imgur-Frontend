import React, { useState } from 'react';
import axios from "axios";


const Signup = () => {
  const [user,setUser]=useState({
    firstName:"",
    lastName:"",
    userName:"",
    email:"",
    password:"",
    cpassword:""
  })

  // const handleSubmit=async(e)=>{
  //   e.preventDefault();
  //   await user
  //   console.log("data", user)
  // }
  const handleChange = e =>{
    
    const {name,value} = e.target
    setUser({
    ...user,
    [name]:value
    })
    }
    const handleRegister = ()=>{
      
      const {firstName,lastName,userName,email,password,cpassword} = user
      if (firstName && lastName && userName && email && password && cpassword){
        
       axios.post("http://localhost:6969/Register",user )
       .then(res=>console.log(res))
       console.log(user)
      }
      else{
          alert("invalid input")
      }
    }

  return (
    <div>
      <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col">
        <h1>User Registartion</h1>
        <input
          type="text"
          id='firstName'
          name='firstName'
          value={user.firstName}
          onChange={handleChange}
          placeholder='First Name'
          required   
          autoComplete='on'/>
        <input
          type="text"
          id='lastName'
          name='lastName'
          value={user.lastName}
          onChange={handleChange}
          placeholder='Last Name'
          required  autoComplete='on' />
        <input
          type="text"
          id='userName'
          name='userName'
          value={user.userName}
          onChange={handleChange}
          placeholder='User Name'
          required  autoComplete='on' />
        <input
          type="email"
          id='email'
          name='email'
          value={user.email}
          onChange={handleChange}
          placeholder='Enter Your Email '
          required  autoComplete='on' />
        <input
          type="password"
          id='password'
          name='password'
          value={user.password}
          onChange={handleChange}
          placeholder='Enter Your Password'
          required  autoComplete='on' />
        <input
          type="password"
          id='cpassword'
          name='cpassword'
          value={user.cpassword}
          onChange={handleChange}
          placeholder='Enter Your Confirm Password'
          required 
          autoComplete='on' />

        <button onClick={handleRegister} type='submit'>Create Account</button>

      </form>
    </div>
  )
}

export default Signup
