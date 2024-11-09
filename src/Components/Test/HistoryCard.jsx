
const HistoryCard = ({ programName, date }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{programName}</h3>
        <p className="text-gray-500">{new Date(date).toDateString()}</p>
      </div>
      <div className="flex gap-4 mt-4 md:mt-0">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
          View
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200">
          Download Report
        </button>
      </div>
    </div>
  );
};

export default HistoryCard;
