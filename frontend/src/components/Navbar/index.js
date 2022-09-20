import { Link } from "react-router-dom"
import "./style.css"

const Navbar = ({hideNavbar})=>{




    return(
        <div className="nav">
         { hideNavbar ?
         <div className="RegAndLogin">
         <Link to='/users'>Register</Link>
         <Link to='/login'>Login</Link>
         </div>
         :
         <div className="dashAndArt">
         <Link to='/dashboard'>Dashboard</Link>
         <Link to='/articles'>Create New Article</Link>
          </div>
             
          }
         
        
        
        
        
        
        
        
        
        </div>


    )

}

export default Navbar