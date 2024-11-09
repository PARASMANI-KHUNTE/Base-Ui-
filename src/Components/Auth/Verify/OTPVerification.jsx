import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OTPVerification = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { email, phone } = state || {};
  const [otp, setOtp] = useState('');
  const [resendDisabled, setResendDisabled] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Redirect or show error if email or phone is missing
    if (!email || !phone) {
      setMessage("Missing required information. Please return to the registration form.");
      return;
    }

    // Enable resend button after 5 minutes
    const timer = setTimeout(() => {
      setResendDisabled(false);
    }, 300000); // 5 minutes

    return () => clearTimeout(timer);
  }, [email, phone]);

  const handleOTPChange = (e) => setOtp(e.target.value);

  const handleVerify = async () => {
    try {
      const response = await fetch('http://localhost:7080/auth/verifyOtp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, phone, otp })
      });
      if (response.ok) {
        navigate('/adminDashboard'); // Navigate to admin dashboard on success
      } else {
        setMessage("OTP verification failed. Please try again.");
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage("An error occurred. Please try again.");
    }
  };

  const handleResendOtp = async () => {
    if (resendDisabled) return;

    try {
      await fetch('http://localhost:7080/auth/sendOtp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, phone })
      });
      setResendDisabled(true);
      setMessage("OTP has been resent successfully!");
      setTimeout(() => setResendDisabled(false), 300000); // Re-disable resend for 5 minutes
    } catch (error) {
      console.error('Error:', error);
      setMessage("An error occurred while resending the OTP.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r  from-indigo-500 to-blue-700"><div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <div className="text-center">
      <p>{message || `OTP has been sent to ${email} and ${phone}. It will be valid for only 10 minutes.`}</p>
      <input
        type="text"
        maxLength="6"
        value={otp}
        onChange={handleOTPChange}
        placeholder="Enter 6-digit OTP"
        className="mt-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleVerify}
        className="w-full bg-blue-600 text-white py-2 rounded-md mt-2 hover:bg-blue-700 transition duration-300"
      >
        Verify OTP
      </button>
      <button
        onClick={handleResendOtp}
        className={`w-full py-2 mt-4 rounded-md ${resendDisabled ? 'bg-gray-400' : 'bg-blue-600 text-white hover:bg-blue-700'} transition duration-300`}
        disabled={resendDisabled}
      >
        Resend OTP
      </button>
    </div>
    </div></div>
    
    
  );
};

export default OTPVerification;
