import React, { useState } from 'react';


const Signup = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    cpassword: ""
  })


  function handleChange(e) {
    const newUser = { ...user }
    newUser[e.target.id] = e.target.value;
    setUser(newUser);
    console.log("onchange", newUser)
  }
  function handleRegister(e) {
    e.preventDefault();

    console.log("handle register", user)

  }


  return (
    <div className='  flex  place-items-center flex-col  rounded bg-gray-100  mx-20 mt-14 '>
      <form onSubmit={(e) => handleRegister(e)} className="flex flex-col  ">
        <div class="mt-6 mb-6" >
          <h1 className='flex place-content-center place-items-center text-xl font-bold'>User Registartion</h1>
        </div>
        <div class="mb-6">
          <input
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type="text"
            id='firstName'
            name='firstName'
            value={user.firstName}
            onChange={(e) => handleChange(e)}
            placeholder='First Name'
            required
            autoComplete='on' />

        </div>
        <div class="mb-6">

          <input
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type="text"
            id='lastName'
            name='lastName'
            value={user.lastName}
            onChange={(e) => handleChange(e)}
            placeholder='Last Name'
            required autoComplete='on' />
        </div>
        <div class="mb-6">

          <input
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type="text"
            id='userName'
            name='userName'
            value={user.userName}
            onChange={(e) => handleChange(e)}
            placeholder='User Name'
            required autoComplete='on' />
        </div>
        <div class="mb-6">

          <input
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type="email"
            id='email'
            name='email'
            value={user.email}
            onChange={(e) => handleChange(e)}
            placeholder='Enter Your Email '
            required autoComplete='on' />
        </div>
        <div class="mb-6">

          <input
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type="password"
            id='password'
            name='password'
            value={user.password}
            onChange={(e) => handleChange(e)}
            placeholder='Enter Your Password'
            required autoComplete='on' />
        </div>
        <div class="mb-6">

          <input
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type="password"
            id='cpassword'
            name='cpassword'
            value={user.cpassword}
            onChange={(e) => handleChange(e)}
            placeholder='Enter Your Confirm Password'
            required
            autoComplete='on' />
        </div>
        <div className='grid place-content-center mb-4'>
          <button className='inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' type='submit'>Create Account</button>

        </div>
      </form>
    </div>
  )
}

export default Signup
