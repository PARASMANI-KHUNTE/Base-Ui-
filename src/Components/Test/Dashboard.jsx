
const seatData = {
  totalSeats: 75,
  Filled: 50,
  SC: 10,
  SC_PWD: 1,
  ST: 5,
  ST_PWD: 0,
  OBC: 19,
  OBC_PWD: 1,
  EWS: 7,
  EWS_PWD: 0,
  UR: 31,
  UR_PWD: 1,
  SCLeft: 2,
  SC_PWDLeft: 1,
  STLeft: 3,
  ST_PWDLeft: 0,
  OBCLeft: 19,
  OBC_PWDLeft: 1,
  EWSLeft: 7,
  EWS_PWDLeft: 0,
  URLeft: 5,
  UR_PWDLeft: 1,
  SCFilled: 8,
  SC_PWDFilled: 1,
  STFilled: 3,
  ST_PWDFilled: 0,
  OBCFilled: 19,
  OBC_PWDFilled: 1,
  EWSFilled: 7,
  EWS_PWDFilled: 0,
  URFilled: 25,
  UR_PWDFilled: 1,
};

const Dashboard = () => {
  const seatCategories = [
    { label: "Total Seats", filled: seatData.Filled, total: seatData.totalSeats },
    { label: "SC", filled: seatData.SCFilled, total: seatData.SC },
    { label: "ST", filled: seatData.STFilled, total: seatData.ST },
    { label: "OBC", filled: seatData.OBCFilled, total: seatData.OBC },
    { label: "EWS", filled: seatData.EWSFilled, total: seatData.EWS },
    { label: "UR", filled: seatData.URFilled, total: seatData.UR },
    { label: "SC PWD", filled: seatData.SC_PWDFilled, total: seatData.SC_PWD },
    { label: "ST PWD", filled: seatData.ST_PWDFilled, total: seatData.ST_PWD },
    { label: "OBC PWD", filled: seatData.OBC_PWDFilled, total: seatData.OBC_PWD },
    { label: "EWS PWD", filled: seatData.EWS_PWDFilled, total: seatData.EWS_PWD },
    { label: "UR PWD", filled: seatData.URFilled, total: seatData.UR_PWD },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <nav className="flex items-center gap-4 mb-6">
        <h1 className="text-xl font-bold text-gray-700">Counselling for</h1>
        <select className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500">
          <option value="">Select programme</option>
          <option value="BCA">BCA</option>
          <option value="Bsc">Bsc</option>
          <option value="Msc">Msc</option>
          <option value="MCA">MCA</option>
          <option value="Phd">Phd</option>
        </select>
        <select className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500">
          <option value="">Select round</option>
          <option value="Round1">Round 1</option>
          <option value="Round2">Round 2</option>
        </select>
      </nav>

      {/* Seat Information */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
        {seatCategories.map((category, index) => (
          <div
            key={index}
            className="bg-blue-600 text-white p-4 rounded-lg shadow-lg text-center"
          >
            <h2 className="font-semibold">{category.label}</h2>
            <p>{category.filled} / {category.total}</p>
          </div>
        ))}
      </div>

      {/* Filter Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-gray-600 font-medium">By Category</label>
            <select className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
              <option value="">Sort</option>
              <option value="sc">SC</option>
              <option value="st">ST</option>
              <option value="ur">UR</option>
              <option value="obc">OBC</option>
              <option value="EWS">EWS</option>
              <option value="EWSPWD">EWS PWD</option>
              <option value="scPWD">SC PWD</option>
              <option value="stPWD">ST PWD</option>
              <option value="urPWD">UR PWD</option>
              <option value="obcPWD">OBC PWD</option>
            </select>
          </div>
          <div>
            <label className="text-gray-600 font-medium">By CUET Score</label>
            <select className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
              <option value="">Sort by</option>
              <option value="highest">Highest</option>
              <option value="lowest">Lowest</option>
            </select>
          </div>
          <div>
            <label className="text-gray-600 font-medium">By Status</label>
            <select className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
              <option value="">Sort by</option>
              <option value="Done">Done</option>
              <option value="Pending">Pending</option>
              <option value="Waiting">Waiting</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </div>
        <div className="flex items-center mt-6 gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200">
            Select All
          </button>
          <select className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
            <option value="pdf">Export as PDF</option>
            <option value="Excel">Export as Excel</option>
            <option value="createRound">Create Counselling Round</option>
          </select>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Data Display</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              {["Sno", "Application No", "Name", "Gender", "Category", "CUET Score", "Status"].map((header, index) => (
                <th
                  key={index}
                  className="p-2 border-b font-medium text-gray-600"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50 transition duration-200">
              <td className="p-2 border-b">1</td>
              <td className="p-2 border-b">cuet/25/21312414</td>
              <td className="p-2 border-b">Jhona</td>
              <td className="p-2 border-b">F</td>
              <td className="p-2 border-b">ST</td>
              <td className="p-2 border-b">196</td>
              <td className="p-2 border-b">Done</td>
            </tr>
            {/* More rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
