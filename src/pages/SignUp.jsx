import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="bg-white w-[400px] h-[500px] shadow-md rounded-lg">
        <div className="flex flex-col items-center space-y-5">
          <h1 className="text-2xl font-bold text-gray-700">Sign Up</h1>
          <input type="text" placeholder="Full Name" className="w-[300px] h-[40px] border-2 border-gray-300 rounded-lg px-5"/>
          <input type="text" placeholder="Email" className="w-[300px] h-[40px] border-2 border-gray-300 rounded-lg px-5"/>
          <input type="password" placeholder="Password" className="w-[300px] h-[40px] border-2 border-gray-300 rounded-lg px-5"/>
          <input type="password" placeholder="Confirm Password" className="w-[300px] h-[40px] border-2 border-gray-300 rounded-lg px-5"/>
          <button className="bg-blue-600 w-[300px] h-[40px] text-center text-white px-4 py-2 mt-1 rounded hover:bg-blue-700">Sign Up</button>
          <p className="text-gray-700">Already have an account? <Link to="/LoginPage" className="text-blue-600 hover:underline">Login</Link></p>
        </div>
      </div>
    </div>
  );
}
export default SignUp;