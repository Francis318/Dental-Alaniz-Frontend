import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import DoctorProfile from "./components/DoctorProfile/DoctorProfile";
import Login from "./components/Login/Login";
import AddDoctor from "./components/AddDoctor/AddDoctor";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      setIsLoggedIn(true);
      setCurrentUser({ name: "Admin" });
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentUser({ name: "Admin Kike" });
  };

  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  return (
    <BrowserRouter>
      <div className="page">
        <Header
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          onLogOut={handleLogOut}
        />
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/"
            element={
              <main>
                <Main />
                <About isLoggedIn={isLoggedIn} />
              </main>
            }
          />
          <Route
            path="/doctor/:id"
            element={<DoctorProfile isLoggedIn={isLoggedIn} />}
          />
          <Route path="/add-doctor" element={<AddDoctor />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
