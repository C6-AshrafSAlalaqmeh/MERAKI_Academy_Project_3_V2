import "./style.css"
import React, { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"



const Login =({setSuccessShow, setToken,token ,setisLoggedIn,success,setSuccess,successShow,setHideNavbar})=>{
const [email , setEmail]=useState('')
const [password , setPassword]=useState('')

const navigate = useNavigate()


const login =()=>{
    axios.post('http://localhost:5000/login',{
        email ,
        password
  


    })
    .then((result)=>{
        console.log(result)
      setToken(result.data.token)
        console.log(result.data.token)
        
      
      
      
        setisLoggedIn(true)
       setSuccess(result.data.message)
       setHideNavbar(false)
       setSuccessShow(true)
       navigate('/dashboard')
    })
    .catch((err)=>{
        setSuccess(err.response.data.message)
        setSuccessShow(true)
    })
}



return(
<div className="contanir">
<h1>Login :</h1>
<div className="inputlogin">
<input type='email' placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
<input type='password' placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
</div>
<div className="button">
<button className="inbutton" onClick={login}> Login</button>
</div>

{ successShow && <div className='result'>
     {successShow && success }
     </div>
       }
   

















</div>
)


}
export default Login