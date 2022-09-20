import axios from "axios";
import React, { useState } from "react";

const AddArticle = ({token ,setHideNavbar}) => {
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
       authorization : 'Bearer' + token
     }

  })
.then((result)=>{
console.log(result.data.message)


})
.catch((err)=>{
  console.log(token) 
  console.log(err.response.data.message)

})

}


return(<> 
  <div>AddArticle</div>

<input type='text' onChange={(e)=>{setTitle(e.target.value)}}/>
<textarea onChange={(e)=>{setDescription(e.target.value)}}/>


<button onClick={Create_New_Article}>Create New Article</button>



  </>
  )
};

export default AddArticle;
