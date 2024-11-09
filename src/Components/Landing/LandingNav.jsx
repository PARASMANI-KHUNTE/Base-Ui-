import { useState } from "react";
import { Link } from "react-router-dom";

const LandingNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg sticky top-0 z-50">
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <img
            width={50}
            height={20}
            src="/3061c9870ae9f4f01af517b2bc531ac0a6483e55817ab6a8700fc8f9b964ecde1_1697607253_72628675_logo.png"
            alt="Logo"
            className="rounded-full shadow-md border-2 border-white"
          />
          <h1 className="text-2xl font-bold text-white tracking-wide">GGV Counseling System</h1>
        </div>

        {/* Toggle Button for Mobile */}
        <button
          onClick={toggleSidebar}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className={`w-6 h-6 ${isOpen ? "hidden" : "block"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          <svg
            className={`w-6 h-6 ${isOpen ? "block" : "hidden"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex gap-6">
          <li>
            <Link
              to="/"
              className="text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-lg transition duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/AdminLogin"
              className="text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-lg transition duration-300 ease-in-out"
            >
              Admin
            </Link>
          </li>
          <li>
            <Link
              to="/StudentLogin"
              className="text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-lg transition duration-300 ease-in-out"
            >
              Student
            </Link>
          </li>
          <li>
            <Link
              to="/ExecutiveLogin"
              className="text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-lg transition duration-300 ease-in-out"
            >
              Executive
            </Link>
          </li>
          <li>
            <Link
              to="/Notification"
              className="text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-lg transition duration-300 ease-in-out"
            >
              Notification
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className="text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-lg transition duration-300 ease-in-out"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Settings"
              className="text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-lg transition duration-300 ease-in-out"
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>

      {/* Sidebar for Mobile Screens */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40 md:hidden" onClick={toggleSidebar}>
          <div className="absolute left-0 top-0 w-64 h-full bg-white p-4 shadow-lg">
            <h2 className="text-lg font-bold text-blue-600 mb-4">Menu</h2>
            <ul className="flex flex-col gap-8">
              <li>
                <Link
                  to="/"
                  className="text-blue-600  hover:bg-blue-700 p-3 hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/AdminLogin"
                  className="text-blue-600 hover:bg-blue-700 p-3 hover:text-white"
                >
                  Admin
                </Link>
              </li>
              <li>
                <Link
                  to="/StudentLogin"
                  className="text-blue-600 hover:bg-blue-700 p-3 hover:text-white"
                >
                  Student
                </Link>
              </li>
              <li>
                <Link
                  to="/ExecutiveLogin"
                  className="text-blue-600 hover:bg-blue-700 p-3 hover:text-white"
                >
                  Executive
                </Link>
              </li>
              <li>
                <Link
                  to="/Notification"
                  className="text-blue-600 hover:bg-blue-700 p-3 hover:text-white"
                >
                  Notification
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className="text-blue-600 hover:bg-blue-700 p-3 hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/Settings"
                  className="text-blue-600 hover:bg-blue-700 p-3 hover:text-white"
                >
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default LandingNav;
