import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Settings</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link 
                to="/account"
                className="block text-center bg-gray-100 hover:bg-blue-600 text-gray-800 hover:text-white py-3 rounded-md transition-all duration-300 ease-in-out"
              >
                Account
              </Link>
            </li>
            <li>
              <Link 
                to="/theme"
                className="block text-center bg-gray-100 hover:bg-blue-600 text-gray-800 hover:text-white py-3 rounded-md transition-all duration-300 ease-in-out"
              >
                Theme
              </Link>
            </li>
            <li>
              <Link 
                to="/logout"
                className="block text-center bg-gray-100 hover:bg-red-600 text-gray-800 hover:text-white py-3 rounded-md transition-all duration-300 ease-in-out"
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Settings;
