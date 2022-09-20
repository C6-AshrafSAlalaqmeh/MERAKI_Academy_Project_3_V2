import "./App.css";
import { Routes , Route} from "react-router-dom";
import Register from './components/Register'
import Login from "./components/Login";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import AddArticle from "./components/AddArticle";

const App = () => {
  const [token , setToken]=useState('')
  const [isLoggedIn  , setisLoggedIn ]=useState(false)
  const [success , setSuccess] = useState('')
const [successShow ,setSuccessShow]=useState(true)

const [hideNavbar ,setHideNavbar]=useState(true)


  return (
    <div className="App">
     {/* <h1>Welcome To APP</h1> */}
      

     {<Navbar hideNavbar={hideNavbar}/>}
      <Routes>
      <Route path=""/>
      
      <Route path="/users" element=
      {<Register setSuccess={setSuccess} success={success} setSuccessShow={setSuccessShow} successShow={successShow} />}/>
      
      
      <Route path="/login" element=
      {<Login setToken={setToken} token={token} setisLoggedIn={setisLoggedIn}  setSuccess={setSuccess} success={success}successShow={successShow} setHideNavbar={setHideNavbar}/>}/>
      
      
      <Route path="/dashboard" element={<Dashboard token={token}/>}/>

     <Route path="/articles" element={<AddArticle token={token} setHideNavbar={setHideNavbar}/>}/>

      <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    
    </div>
  );
};

export default App;
