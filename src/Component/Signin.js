import React,{useState} from 'react'


const Signin = () => {

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
    console.log("handle login",user)
   
}
  return (
    <div>
      <form onSubmit={(e)=>handleLogin(e)}>
        <input 
        type="email"
        name='email'
        id='email'
        value={user.email}
        onChange={(e)=>handleChange(e)}
        placeholder="Enter Your Email"
        required
        autoComplete='on' />
          <input 
        type="password"
        name='password'
        id='password'
        value={user.password}
        onChange={(e)=>handleChange(e)}
        placeholder="Enter Your Password"
        required
        autoComplete='on' />
        <button type='submit' >Sign In</button>

      </form>
    </div>
  )
}

export default Signin
