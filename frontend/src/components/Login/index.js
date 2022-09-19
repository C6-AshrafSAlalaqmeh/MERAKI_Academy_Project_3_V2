import React, { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import Dashboard from "../Dashboard"


const Login =({ setToken,token ,setisLoggedIn})=>{
const [email , setEmail]=useState()
const [password , setPassword]=useState()

const navigate = useNavigate()


const login =()=>{
    axios.post('http://localhost:5000/login',{
        email ,
        password
  


    })
    .then((result)=>{
        console.log(result)
        setToken(result.data.token)
        setisLoggedIn(true)
       navigate('/dashboard')
    })
    .catch((err)=>{
        console.log(err.message)
    })
}



return(
<>

<input type='email' placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
<input type='password' placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
<button onClick={login}> Login</button>



















</>
)


}
export default Login