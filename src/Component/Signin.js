import React,{useState} from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom"

const Signin = ({setLoginUser}) => {
  const Navigate = useNavigate()

  const [user,setUser] = useState({
    email:"",
    password: ""
})
const handleChange = e =>{
  const {name,value} = e.target
  setUser({
  ...user,//spread operator 
  [name]:value

  })


  }
  const login =()=>{
    axios.post("http://localhost:6969/Login",user)
    .then(res=>{alert(res.data.message)
    setLoginUser(res.data.user)
    Navigate.push("/")
    console.log(user,res)
})
}
  return (
    <div>
      <form onSubmit={(e)=>e.preventDefault()}>
        <input 
        type="email"
        name='email'
        value={user.email}
        onChange={handleChange}
        placeholder="Enter Your Email"
        required
        autoComplete='on' />
          <input 
        type="password"
        name='password'
        value={user.password}
        onChange={handleChange}
        placeholder="Enter Your Password"
        required
        autoComplete='on' />
        <button type='submit' onClick={login}>Sign In</button>

      </form>
    </div>
  )
}

export default Signin
