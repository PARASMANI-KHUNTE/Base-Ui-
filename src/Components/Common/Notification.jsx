import  { useState } from 'react';

const Notification = () => {
  const [yearFilter, setYearFilter] = useState('All');
  const [sortOption, setSortOption] = useState('Latest');

  // Sample notifications data
  const notifications = [
    {
      title: 'New Admission Guidelines Released',
      description: 'Check out the latest admission guidelines for 2024.',
      date: '2024-01-15',
      year: '2024',
    },
    {
      title: '2022-24 ug counselling Applications Open',
      description: 'Apply now for various ug prgrammes available for 2023-24.',
      date: '2023-10-01',
      year: '2023',
    },
    // Add more notification items here
  ];

  // Filter notifications by selected year and sort by date
  const filteredNotifications = notifications
    .filter(notification => yearFilter === 'All' || notification.year === yearFilter)
    .sort((a, b) => {
      if (sortOption === 'Latest') {
        return new Date(b.date) - new Date(a.date);
      } else {
        return new Date(a.date) - new Date(b.date);
      }
    });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Notifications</h1>
      
      {/* Filter and Sort Options */}
      <div className="flex justify-between items-center mb-6">
        {/* Filter by Year */}
        <select
          className="p-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setYearFilter(e.target.value)}
          value={yearFilter}
        >
          <option value="All">All Years</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          {/* Add more years as needed */}
        </select>

        {/* Sort Options */}
        <select
          className="p-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setSortOption(e.target.value)}
          value={sortOption}
        >
          <option value="Latest">Sort by Latest</option>
          <option value="Oldest">Sort by Oldest</option>
        </select>
      </div>

      {/* Notification List */}
      <div className="grid gap-4">
        {filteredNotifications.map((notification, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-blue-600">{notification.title}</h2>
            <p className="text-gray-700 mt-2">{notification.description}</p>
            <div className="text-sm text-gray-500 mt-4">
              <span className="block">Date: {new Date(notification.date).toLocaleDateString()}</span>
              <span>Year: {notification.year}</span>
            </div>
          </div>
        ))}
        {filteredNotifications.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No notifications available.</p>
        )}
      </div>
    </div>
  );
};

export default Notification;
