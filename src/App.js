import './App.css';
import BackendStatus from './components/BackendStatus';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import {Routes, Route} from "react-router-dom";
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div>
      
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="/login" element={<LoginPage />}/>
      </Routes>

      {/* <BackendStatus /> */}

      <Footer />
    </div>
  );
}

export default App;
