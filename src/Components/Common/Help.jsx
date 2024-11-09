const Help = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">Help & Support</h2>
        
        {/* Help Options List */}
        <ul className="space-y-4 text-lg">
          <li className="bg-gray-100 p-4 rounded-lg hover:bg-blue-100 transition duration-300">
            Forgot Password: <span className="text-gray-700">If you’ve forgotten your password, follow the instructions <a href="/reset-password" className="text-blue-600 hover:underline">here</a>.</span>
          </li>
          <li className="bg-gray-100 p-4 rounded-lg hover:bg-blue-100 transition duration-300">
            Forgot ID: <span className="text-gray-700">If you’ve lost your ID, contact support <a href="/contact-support" className="text-blue-600 hover:underline">here</a>.</span>
          </li>
        </ul>
        
      </div>
    </div>
  );
}

export default Help;
