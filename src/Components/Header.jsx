import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/JobLogo.png';
const NavBar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src={Logo} className="bg-blue-700 text-xl font-bold w-[149px] h-[52px] p-1 rounded"/>
          </div>

          <div className="flex space-x-5">
            <Link to="/" className="text-gray-700 hover:text-blue-700 hover:underline">Job Search</Link>
            <Link to="/"  className="text-gray-700 hover:text-blue-700 hover:underline">My Applications</Link>
            <Link to="/" className="text-gray-700 hover:text-blue-700 hover:underline">Companies</Link>
            <Link to="/" className="text-gray-700 hover:text-blue-700 hover:underline">Contact Us</Link>
          </div>

          <div className="flex space-x-5 w-[370px] h-[48px]">
            <Link to="/Login" className="bg-blue-600 w-[156px] h-[40px] text-center text-white px-4 py-2 mt-1 ml-3 rounded hover:bg-blue-700">Login</Link> 
            <Link to="/" className="bg-white-600 w-[166px] h-[40px] text-center border-1 border-[#0034D1] text-[#2F2F2F] px-5 py-2 mt-1 rounded hover:bg-blue-500">Sign In</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;