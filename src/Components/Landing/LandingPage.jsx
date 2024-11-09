

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-700 text-white px-4">
      
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-center">University Counseling System</h1>
      
      {/* Subheader */}
      <p className="text-lg mb-8 text-center max-w-2xl">
        Streamlining the counseling process for students and faculty with automated selection, merit list generation, and document verification.
      </p>
      
      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-4xl">
        
        {/* Feature 1 */}
        <div className="bg-white text-blue-700 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-4">Automated Merit List</h2>
          <p>
            Simplify the process of selecting students and creating merit lists with automated criteria-based filtering and ranking.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white text-blue-700 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-4">Student Applications</h2>
          <p>
            Invited students can fill out their counseling forms, upload documents, and track their application status in real-time.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white text-blue-700 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-4">Faculty Dashboard</h2>
          <p>
            Faculty can easily sort and filter students, review application history, and manage student records efficiently.
          </p>
        </div>
      </div>
      
      

      {/* Additional Info */}
      <div className="text-center mt-12 max-w-xl">
        <p className="text-md">
          Created by Paras BCA 1st Batch student 2022-25
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
