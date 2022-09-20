import "./style.css"
import axios from "axios"
import { useEffect, useState } from "react"



const Dashboard =({token})=>{
    const [article , setArticle]=useState([])  


    useEffect(()=>{
axios.get('http://localhost:5000/articles',{
    headers :{
        authorization: 'Bearer ' + token
    }
})
.then((result)=>{
console.log(result.data.articles)
setArticle(result.data.articles)
})
.catch((err)=>{
    console.log(err.message)
})

  },[])
  
  
  
    return (
    
    <>
   
    
     {article.map((elem)=>{
    
      return (
            <div className="bodydash">
            <div className="contanrDash">
         <div className="titileDesc">       
        <p className="titleDash">{elem.title}</p>
        <p className="descDash">{elem.description}</p>
        </div>
        <div className="buttonAndInputDash">
        <div className="inputIndash">
         <input className="inputIndiv" placeholder="Comment..." />
         </div>
         <div className="allbutton">
        <button className="add"> Adding Comment</button>
        <button className="update">update</button>
        <button className="delete"> Delete </button>
        </div>
        </div>
        </div>
        
        </div>
        )
    })} 
    
    
    </>
    
    )
}
export default Dashboard