import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import {Routes, Route} from "react-router-dom";
import ProfilePage from './pages/ProfilePage';

// import "./App.css"
import "./styles/Test.css"
import Navbar from './components/Navbar';
import SidebarRight from './components/SidebarRight';
import DailyThoughts from './pages/DailyThoughts';

function App() {
  return (
    <div className="app">
      
      <Header />

      <div className="mid-sections">
      <Navbar />

      <div className="content">
              <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="/dailythoughts" element={<DailyThoughts />}/>
      </Routes>
      </div>


      <SidebarRight/>
      </div>


      <Footer />
    </div>
  );
}

export default App;
