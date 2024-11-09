import  { useState } from "react";
import HistoryCard from "./HistoryCard";

const History = () => {
  const [year, setYear] = useState("");
  const [program, setProgram] = useState("");

  // Sample data for demonstration
  const historyData = [
    { id: 1, programName: "bca", date: "2023-09-15" },
    { id: 2, programName: "bsc", date: "2023-09-15" },
    { id: 3, programName: "mca", date: "2023-09-15" },
    { id: 4, programName: "msc", date: "2023-09-15" },
    { id: 5, programName: "phd", date: "2023-09-15" },
    // Add more entries as needed
  ];

  // Filtered data based on selected year and program
  const filteredData = historyData.filter((item) => {
    return (
      (year ? item.date.startsWith(year) : true) &&
      (program ? item.programName === program : true)
    );
  });

  return (
    <div className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">History</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full max-w-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Filter By:</h2>
        <div className="flex gap-4">
          <select
            className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="">Select Year</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            {/* Add more years as needed */}
          </select>

          <select
            className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
          >
            <option value="">Select Program</option>
            <option value="bca">BCA</option>
            <option value="bsc">Bsc</option>
            <option value="mca">MCA</option>
            <option value="msc">Msc</option>
            <option value="phd">Phd</option>
            {/* Add more programs as needed */}
          </select>
        </div>
      </div>

      <div className="grid gap-6 w-full max-w-2xl">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <HistoryCard
              key={item.id}
              programName={item.programName}
              date={item.date}
            />
          ))
        ) : (
          <p className="text-gray-600 text-center">No records found.</p>
        )}
      </div>
    </div>
  );
};

export default History;
