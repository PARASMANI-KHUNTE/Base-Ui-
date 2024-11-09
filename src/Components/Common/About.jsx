import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">About Our Counseling System</h2>
        
        {/* Content */}
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Our university’s counseling system is designed to streamline the admission and support process for students. Through this platform, we aim to automate student selection, facilitate counseling, and provide direct access to resources and information.
        </p>
        
        <p className="text-gray-700 text-lg leading-relaxed">
          Our system is accessible to all students, faculty, and administrative staff, ensuring a seamless and efficient counseling experience. If you have questions or need help, please visit the <Link to="/help" className="text-blue-600 hover:underline">Help</Link> page.
        </p>
        
      </div>
    </div>
  );
}

export default About;
