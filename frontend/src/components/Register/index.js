import React, { useState } from "react"
import axios from 'axios'



const Register =({success,setSuccess,setSuccessShow ,successShow})=>{


   const [firstName , setFirstName] =useState("")
const [lastName , setLastName] =useState("")
const [age , setAge] =useState("")
const [country , setCountry] =useState("")
const [email , setEmail] =useState("")
const [password , setPassword] =useState("")



const buttonRegister =()=>{
   axios.post('http://localhost:5000/users',{
    firstName ,
    lastName ,
    age ,
    country ,
    email ,
    password ,
    role:"6328c76f262f428439f0806b"
   })
   .then((result)=>{
 console.log(result.data.message)
 setSuccess(result.data.message)

   })
   .catch((err)=>{
  console.log(err.response.data.message)
  setSuccess(err.response.data.message)

   })


   
}



return(
   <>
   <h1> Hello </h1>
       <input type='text' placeholder="First Name" onChange={(e)=>{setFirstName(e.target.value)}}/> 
       <input type='text' placeholder="Last  Name" onChange={(e)=>{setLastName(e.target.value)}}/> 
       <input type={Number} placeholder="Age" onChange={(e)=>{setAge(e.target.value)}}/> 
       <input type='text' placeholder="Country" onChange={(e)=>{setCountry(e.target.value)}}/> 
       <input type='email' placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/> 
       <input type='password' placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
      
    <button onClick={buttonRegister}>Register</button>
     
     {successShow && success }
   
   </>

    )
}

export default Register