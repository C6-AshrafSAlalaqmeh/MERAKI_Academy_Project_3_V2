import "./App.css";
import { Routes , Route} from "react-router-dom";
import Register from './components/Register'
import Login from "./components/Login";
import { useState } from "react";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [token , setToken]=useState('')
  const [isLoggedIn  , setisLoggedIn ]=useState(false)


  return (
    <div className="App">
     <h1>Welcome To APP</h1>
    
      <Routes>
      <Route path="/users" element={<Register/>}/>
      <Route path="/login" element={<Login setToken={setToken} token={token} setisLoggedIn={setisLoggedIn}/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    
    </div>
  );
};

export default App;
