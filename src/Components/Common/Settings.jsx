import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Settings</h2>
        
        <nav>
          <ul className="space-y-4">
            {/* Theme Link */}
            <li>
              <Link 
                to="/theme"
                className="block text-center bg-gray-100 hover:bg-blue-600 text-gray-800 hover:text-white py-3 rounded-lg shadow-md transition duration-300 ease-in-out"
              >
                Theme
              </Link>
            </li>
            
            {/* Help Link */}
            <li>
              <Link 
                to="/Help"
                className="block text-center bg-gray-100 hover:bg-blue-600 text-gray-800 hover:text-white py-3 rounded-lg shadow-md transition duration-300 ease-in-out"
              >
                Help
              </Link>
            </li>

            {/* About Link */}
            <li>
              <Link 
                to="/about"
                className="block text-center bg-gray-100 hover:bg-blue-600 text-gray-800 hover:text-white py-3 rounded-lg shadow-md transition duration-300 ease-in-out"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Settings;
