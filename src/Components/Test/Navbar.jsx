import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-white shadow-md">
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center gap-4">
          <img
            width={50}
            height={20}
            src="/3061c9870ae9f4f01af517b2bc531ac0a6483e55817ab6a8700fc8f9b964ecde1_1697607253_72628675_logo.png"
            alt="Logo"
          />
          <h1 className="text-xl font-semibold text-gray-800">GGV Counseling System</h1>
        </div>
        <ul className="flex gap-5">
          <li className="relative">
            <Link
              to="/Dashboard"
              className="text-gray-800 hover:text-white hover:bg-blue-600 transition duration-300 ease-in-out p-2 rounded"
            >
              Dashboard
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/History"
              className="text-gray-800 hover:text-white hover:bg-blue-600 transition duration-300 ease-in-out p-2 rounded"
            >
              History
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/Profile"
              className="text-gray-800 hover:text-white hover:bg-blue-600 transition duration-300 ease-in-out p-2 rounded"
            >
              Profile
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/Settings"
              className="text-gray-800 hover:text-white hover:bg-blue-600 transition duration-300 ease-in-out p-2 rounded"
            >
              Settings
            </Link>
          </li>
      
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
