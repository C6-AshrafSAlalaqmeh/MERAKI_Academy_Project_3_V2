import "./App.css";
import { Routes , Route} from "react-router-dom";
import Register from './components/Register'


const App = () => {
  return (
    <div className="App">
     <h1>Welcome To APP</h1>
    
      <Routes>
      <Route path="/rgister" element={<Register/>}/>
    
      </Routes>
    
    </div>
  );
};

export default App;
