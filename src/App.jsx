import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import DoctorProfile from "./components/DoctorProfile/DoctorProfile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: "Dr. Enrique" });

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <div className="page">
        <Header
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          onLoginClick={handleLoginClick}
          onLogOut={handleLogOut}
        />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Main />
                <About />
              </main>
            }
          />
          <Route path="/doctor/:id" element={<DoctorProfile />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
