import axios from "axios"
import { useEffect, useState } from "react"



const Dashboard =({token})=>{
    const [article , setArticle]=useState([])
  
  
  useEffect(()=>{

axios.get('http://localhost:5000/articles',{
    headers : 'Bearer' + token
})
.then((result)=>{
console.log(result)
setArticle(result)
})
.catch((err)=>{
    console.log(err)
})

  })
  
  
  
    return (
    
    <>
    <h1> Dashboard</h1>
    {article.map((elem)=>{
        return (
            <>
        <p>{elem.title}</p>
        <p>{elem.description}</p>
        <button>Delete</button>
        <button>update</button>
        <button> Adding Comment</button>
        </>
        )
    })}
    
    
    </>
    
    )
}
export default Dashboard