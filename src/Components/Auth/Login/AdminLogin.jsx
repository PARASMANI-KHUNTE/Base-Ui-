import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleHelpClick = () => {
    navigate('/Help');
  };

  const handleRegisterClick = () => {
    navigate('/UserReg');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-blue-700">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-8">Admin Login</h2>

        {/* Admin ID Input */}
        <input
          type="text"
          placeholder="Enter admin ID"
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Enter password"
          className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Login Button */}
        <button className="w-full py-3 mb-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
          Login
        </button>

        {/* Register and Help Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handleRegisterClick}
            className="text-blue-700 font-semibold hover:underline"
          >
            Register
          </button>
          <button
            onClick={handleHelpClick}
            className="text-blue-700 font-semibold hover:underline"
          >
            Help?
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
