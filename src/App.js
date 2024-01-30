import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar";
import SidebarRight from "./components/SidebarRight";
import DailyThoughts from "./pages/DailyThoughts";
import "./styles/Test.css";
import StudyRoom from "./pages/StudyRoom";
import Feed from "./pages/Feed";
import WelcomePage from "./pages/WelcomePage";
import { useState } from "react";
import LoginPage from "./pages/LoginPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="app">
      <Header />

      <div className="mid-sections">
        <Navbar />

        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <WelcomePage
                  email={email}
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                />
              }
            />
            <Route
              path="/login"
              element={<LoginPage setLoggedIn={setLoggedIn} setEmail={setEmail} />}
            />

            <Route path="/feed" element={<Feed />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/dailythoughts" element={<DailyThoughts />} />
            <Route path="/studyroom" element={<StudyRoom />} />
          </Routes>
        </div>

        <SidebarRight />
      </div>

      <Footer />
    </div>
  );
}

export default App;
