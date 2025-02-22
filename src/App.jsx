import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Description from './pages/Description';
import Home from "./pages/Home";
import JobPosting from './pages/JobPosting';
import Login from "./pages/LoginPage";
import Signup from "./pages/SignUp";

const App = () => {
  return (
    <div>
      <div><BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element = {<Home/>}/>
         <Route path="/LoginPage" element={<Login/>} />
         <Route path="/SignUp" element={<Signup/>} />
         <Route path="/jobs/:id" element={<Description />} />
         <Route path="/JobPosting" element={<JobPosting/>} />

      </Route>
      </Routes>
      </BrowserRouter></div>
      <div>
        
      </div>
      
    </div>
    
   
   
  );
};

export default App;