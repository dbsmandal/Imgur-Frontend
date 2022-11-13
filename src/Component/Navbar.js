import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../Images/Imgur_logo.svg.png"

const Navbar = () => {
  return (
    <div className='bg-green-300'>
    <div className='  mx-2 flex gap-4'>
        <div className='w-2/12 grid place-items-center '>
            <Link to='/'>
            <img className='h-10 w-20' src={logo} alt="Imgur-FrontEnd" />
            </Link>

        </div>
        <div className='w-10/12 grid place-items-center grid-cols-6 gap-4' >
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/upload">Upload</Link>
            </div>
            <div className='col-span-2'>
                <Link to="/search">Search</Link>
            </div>
            <div>
                <Link to="/signin">SignIn</Link>
            </div>
            <div>
                <Link to="/signup">Register</Link>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Navbar
