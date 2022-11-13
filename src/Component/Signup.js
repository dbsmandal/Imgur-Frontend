import React, { useState } from 'react';


const Signup = () => {
  const [user,setUser]=useState({
    firstName:"",
    lastName:"",
    userName:"",
    email:"",
    password:"",
    cpassword:""
  })

  
  function handleChange (e){
    const newUser = { ...user }
        newUser[e.target.id] = e.target.value;
        setUser(newUser);
        console.log("onchange",newUser)
    }
  function handleRegister(e){
    e.preventDefault();

    console.log("handle register",user)

  }
    

  return (
    <div>
      <form onSubmit={(e)=>handleRegister(e)} className="flex flex-col">
        <h1>User Registartion</h1>
        <input
          type="text"
          id='firstName'
          name='firstName'
          value={user.firstName}
          onChange={(e) => handleChange(e)}
          placeholder='First Name'
          required   
          autoComplete='on'/>
        <input
          type="text"
          id='lastName'
          name='lastName'
          value={user.lastName}
          onChange={(e) => handleChange(e)}
          placeholder='Last Name'
          required  autoComplete='on' />
        <input
          type="text"
          id='userName'
          name='userName'
          value={user.userName}
          onChange={(e) => handleChange(e)}
          placeholder='User Name'
          required  autoComplete='on' />
        <input
          type="email"
          id='email'
          name='email'
          value={user.email}
          onChange={(e) => handleChange(e)}
          placeholder='Enter Your Email '
          required  autoComplete='on' />
        <input
          type="password"
          id='password'
          name='password'
          value={user.password}
          onChange={(e) => handleChange(e)}
          placeholder='Enter Your Password'
          required  autoComplete='on' />
        <input
          type="password"
          id='cpassword'
          name='cpassword'
          value={user.cpassword}
          onChange={(e) => handleChange(e)}
          placeholder='Enter Your Confirm Password'
          required 
          autoComplete='on' />

        <button  type='submit'>Create Account</button>

      </form>
    </div>
  )
}

export default Signup
