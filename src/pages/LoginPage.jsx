import { Link } from 'react-router-dom';
function LoginPage() {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="bg-white w-[400px] h-[500px] shadow-md rounded-lg">
        {/* <div className="flex justify-center items-center h-16">
          <img src={Logo} className="bg-blue-700 text-xl font-bold w-[149px] h-[52px] p-1 rounded"/>
        </div> */}
        <div className="flex flex-col items-center space-y-5">
          <h1 className="text-2xl font-bold text-gray-700">Login</h1>
          <input type="text" placeholder="Email" className="w-[300px] h-[40px] border-2 border-gray-300 rounded-lg px-5"/>
          <input type="password" placeholder="Password" className="w-[300px] h-[40px] border-2 border-gray-300 rounded-lg px-5"/>
          <button className="bg-blue-600 w-[300px] h-[40px] text-center text-white px-4 py-2 mt-1 rounded hover:bg-blue-700">Login</button>
          <p className="text-gray-700">Don't have an account? <Link to="/SignUp" className="text-blue-600 hover:underline">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;