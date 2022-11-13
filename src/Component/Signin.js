import React,{useState} from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Signin = ({ setLoginUser}) => {
  const navigate = useNavigate()


  const [user,setUser] = useState({
    email:"",
    password: ""
})
function handleChange (e){
  const newUser = { ...user }
      newUser[e.target.id] = e.target.value;
      setUser(newUser);
      console.log("onchange",newUser)

  }
  function handleLogin (e){
    e.preventDefault();
    axios.post("https://fakestoreapi.com/auth/login",user)
    .then(res=>{
      alert(res.data.message)
      setLoginUser(res.data.user)
      navigate.push("/")
    })
    console.log("handle login",user)
   
}
  return (
    <div className='  flex  place-items-center  flex-col  rounded bg-gray-100  mx-20 mt-20'>
      <form onSubmit={(e)=>handleLogin(e)} className="flex flex-col  ">
      <div className="mt-6 mb-6" >
      <h1 className='flex place-content-center place-items-center text-xl font-bold'>User Log In</h1>
        </div>
        <div className="mb-6">
        <input 
        className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
        type="email"
        name='email'
        id='email'
        value={user.email}
        onChange={(e)=>handleChange(e)}
        placeholder="Enter Your Email"
        required
        autoComplete='on' />
        </div>
          <div className="mb-6">
          <input 
          className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
        type="password"
        name='password'
        id='password'
        value={user.password}
        onChange={(e)=>handleChange(e)}
        placeholder="Enter Your Password"
        required
        autoComplete='on' />
        </div>
          <div className="grid place-content-center mb-12">
        <button
        className='inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
         type='submit' >Sign In</button>
        </div>

      </form>
    </div>
  )
}

export default Signin
