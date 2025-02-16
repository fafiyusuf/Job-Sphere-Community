import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignUp";

const App = () => {
  return (
    <div>
      <div><BrowserRouter>
      <Routes>
        <Route index element = {<Home/>}/>
         <Route path="/LoginPage" element={<Login/>} />
         <Route path="/SignUp" element={<Signup/>} />
      </Routes>
      </BrowserRouter></div>
      
    </div>
    
   
   
  );
};

export default App;