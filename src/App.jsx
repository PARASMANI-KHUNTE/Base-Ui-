import { BrowserRouter  , Routes ,Route, Navigate} from "react-router-dom"
import AdminNavbar from "./Components/AdminPanel/AdminNavbar"
import StudentNavbar from "./Components/StudentPanel/StudentNavbar"
import ExecutiveNavbar from "./Components/ExecutivePanel/ExecutiveNavbar"
import LandingNav from "./Components/Landing/LandingNav"
import AdminLogin from "./Components/Auth/Login/AdminLogin"
import ExecutiveLogin from "./Components/Auth/Login/ExecutiveLogin"
import StudentLogin from "./Components/Auth/Login/StudentLogin"
import LandingPage from "./Components/Landing/LandingPage"
import Notification from "./Components/Common/Notification"
import About from "./Components/Common/About"
import Settings from "./Components/Common/Settings"
import Help from "./Components/Common/Help"
import UserReg from "./Components/Auth/Register/UserReg"
import StudentReg from "./Components/Auth/Register/StudentReg"
import OTPVerification from './Components/Auth/Verify/OTPVerification'

const App = () => {
  let isLoggedIn = false;
  let role = "admin";
  let content;
  if(isLoggedIn == false ){
    content = <LandingNav />
   
  }else if (isLoggedIn == true){
    switch(role){
      case "admin" : 
        content = <Navigate to="/AdminNavbar" />
        break;
      case "student" :
        content = <Navigate to="/StudentNavbar" />
        break;
      case "executive" :
        content = <Navigate to="/ExecutiveNavbar" />
        break;
    }
  }
  return (
    <BrowserRouter>
         <div>{content}</div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/ExecutiveLogin" element={<ExecutiveLogin />} />
        <Route path="/StudentLogin" element={<StudentLogin />} />
        <Route path="/AdminNavbar" element={<AdminNavbar />} />
        <Route path="/ExecutiveNavbar" element={<ExecutiveNavbar />} />
        <Route path="/StudentNavbar" element={<StudentNavbar />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/About" element={<About />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/UserReg" element={<UserReg />} />
        <Route path="/StudentReg" element={<StudentReg />} />
        <Route path="/OTPVerification" element={<OTPVerification />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
