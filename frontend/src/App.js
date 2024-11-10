import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./components/common/Home";
import Login from "./components/common/Login";
import Register from "./components/common/Register";
import UserHome from "./components/user/UserHome";
import AdminHome from "./components/admin/AdminHome";
import UserAppointments from "./components/user/UserAppointments";

function App() {
  const userLoggedIn = !!localStorage.getItem("userData");

  return (
    <div className="App">
      <Router>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={userLoggedIn ? <Navigate to="/userhome" /> : <Login />} />
            <Route path="/register" element={<Register />} />
            {userLoggedIn ? (
              <>
                <Route path="/adminhome" element={<AdminHome />} />
                <Route path="/userhome" element={<UserHome />} />
                <Route path="/userhome/userappointments/:doctorId" element={<UserAppointments />} />
              </>
            ) : (
              // Redirect non-logged-in users to login
              <Route path="/userhome" element={<Navigate to="/login" />} />
            )}
          </Routes>
        </div>
        <footer className="bg-light text-center text-lg-start">
          <div className="text-center p-3">© 2023 Copyright: MediCareBook</div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
