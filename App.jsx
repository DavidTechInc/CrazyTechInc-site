
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Scripts from './pages/Scripts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scripts" element={<Scripts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;