import { useState } from "react";

const StudentReg = () => {
  const [isLocked, setIsLocked] = useState(false);
  const handleLock = () => setIsLocked(true);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Student Registration Form</h2>
        
        {/* Section 1: Personal Details */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Personal Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600">Name of the Candidate</label>
              <input type="text" disabled={isLocked} className="w-full px-4 py-2 border rounded-md" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block text-gray-600">Fathers Name</label>
              <input type="text" disabled={isLocked} className="w-full px-4 py-2 border rounded-md" placeholder="Enter father's name" />
            </div>
            <div>
              <label className="block text-gray-600">Date of Birth</label>
              <input type="date" disabled={isLocked} className="w-full px-4 py-2 border rounded-md" />
            </div>
          </div>
        </div>

        {/* Section 2: Academic Details */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Academic Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600">Roll No. of CUET</label>
              <input type="text" disabled={isLocked} className="w-full px-4 py-2 border rounded-md" placeholder="Enter CUET roll number" />
            </div>
            <div>
              <label className="block text-gray-600">Category</label>
              <select disabled={isLocked} className="w-full px-4 py-2 border rounded-md">
                <option value="">Select Category</option>
                <option value="UR">UR</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
                <option value="OBC">OBC</option>
                <option value="EWS">EWS</option>
                <option value="PWD">PWD</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600">Marks (%) in Graduation</label>
              <input type="number" disabled={isLocked} className="w-full px-4 py-2 border rounded-md" placeholder="Enter marks percentage" />
            </div>
          </div>
        </div>

        {/* Section 3: Contact Details */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Contact Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600">Email ID</label>
              <input type="email" disabled={isLocked} className="w-full px-4 py-2 border rounded-md" placeholder="Enter email address" />
            </div>
            <div>
              <label className="block text-gray-600">Mobile No.</label>
              <input type="tel" disabled={isLocked} className="w-full px-4 py-2 border rounded-md" placeholder="Enter mobile number" />
            </div>
          </div>
        </div>

        {/* Lock Application and Submit Section */}
        <div className="mt-8 text-center">
          <button
            onClick={handleLock}
            disabled={isLocked}
            className={`w-full md:w-auto px-6 py-2 font-semibold rounded-md ${isLocked ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
          >
            {isLocked ? "Application Locked" : "Lock Application"}
          </button>
          {!isLocked && (
            <button className="w-full md:w-auto px-6 py-2 mt-4 font-semibold bg-green-600 hover:bg-green-700 rounded-md text-white">
              Submit
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default StudentReg;
