import "./style.css"
import axios from "axios";
import React, { useState } from "react";

const AddArticle = ({success,successShow,setSuccess,token ,setHideNavbar,setSuccessShow}) => {
  // setSuccessShow(false)
  setHideNavbar(false)
const [title , setTitle]=useState('')
const [description  , setDescription ]=useState('')

const Create_New_Article =()=>{
  
  axios.post('http://localhost:5000/articles',{
    title,
    description ,
    author :"6328f66c69f711829031dcc6"
  },{ 
     headers :{
       authorization : 'Bearer ' + token
     }

  })
.then((result)=>{
console.log(result.data.message)

setSuccess(result.data.message)
setSuccessShow(true)
})
.catch((err)=>{
  console.log(token) 
  console.log(err.response.data.message)
  setSuccess(err.response.data.message)
  setSuccessShow(true)
})

}


return(<> 
  <div className="contar">
<h1>Create New Article : </h1>
<div className="inputAddArt">
<input className="inputTitile" placeholder="Title" type='text' onChange={(e)=>{setTitle(e.target.value)}}/>
<textarea className="textarea" placeholder="description" onChange={(e)=>{setDescription(e.target.value)}}/>
</div>

<div className="buttonArt">
<button className="butt" onClick={Create_New_Article}>Create New Article</button>
</div>
{ successShow && <div className='result'>
     {successShow && success }
     </div>
       }
</div>
  </>
  )
};

export default AddArticle;
