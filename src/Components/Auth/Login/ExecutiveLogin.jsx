import { useNavigate } from "react-router-dom";

const ExecutiveLogin = () => {
  const navigate = useNavigate();

  const handleHelpClick = () => {
    navigate('/Help');
  };

  const handleRegisterClick = () => {
    navigate('/UserReg');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-700">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-8">Executive Login</h2>

        {/* Executive ID Input */}
        <input
          type="text"
          placeholder="Enter Executive ID"
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Enter password"
          className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Login Button */}
        <button className="w-full py-3 mb-4 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-600 transition duration-300">
          Login
        </button>

        {/* Register and Help Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handleRegisterClick}
            className="text-purple-700 font-semibold hover:underline"
          >
            Register
          </button>
          <button
            onClick={handleHelpClick}
            className="text-purple-700 font-semibold hover:underline"
          >
            Help?
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveLogin;
