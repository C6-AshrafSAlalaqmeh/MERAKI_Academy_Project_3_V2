import { Link ,useNavigate } from "react-router-dom"
import "./style.css"

const Navbar = ({hideNavbar ,setisLoggedIn ,setToken})=>{
    const navigate= useNavigate();

const logout = ()=>{
    localStorage.clear();
    setToken("")
    setisLoggedIn(false)
    navigate('/login')
    
    
}


    return(
        <div className="nav">
         { hideNavbar ?
         <div className="RegAndLogin">
         <Link className="reg" to='/users'>Register</Link>
         <Link className="log" to='/login'>Login</Link>
         </div>
         :
         <div className="dashAndArt">
         <Link className="dash"  to='/dashboard'>Dashboard</Link>
         <Link className="art"  to='/articles'>Create New Article</Link>
         
          <button  onClick={()=> logout()} className="logout">Logout</button> 
          </div>
             
          }
         
        
        
        
        
        
        
        
        
        </div>


    )

}

export default Navbar