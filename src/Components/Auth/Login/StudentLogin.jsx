import { useNavigate } from "react-router-dom";

const StudentLogin = () => {
  const navigate = useNavigate();

  const handleHelpClick = () => {
    navigate('/Help');
  };

  const handleRegisterClick = () => {
    navigate('/StudentReg');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-700">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-teal-700 mb-8">Student Login</h2>

        {/* Student ID Input */}
        <input
          type="text"
          placeholder="Enter Student ID"
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Enter password"
          className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        />

        {/* Login Button */}
        <button className="w-full py-3 mb-4 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-600 transition duration-300">
          Login
        </button>

        {/* Register and Help Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handleRegisterClick}
            className="text-teal-700 font-semibold hover:underline"
          >
            Register
          </button>
          <button
            onClick={handleHelpClick}
            className="text-teal-700 font-semibold hover:underline"
          >
            Help?
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
