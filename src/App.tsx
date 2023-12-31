import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './Pages/AboutPage/AboutPage';
import ResumePage from './Pages/ResumePage/ResumePage';
import ContactPage from './Pages/ContactPage/ContactPage';


import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <Router>
      <div className="root-path">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

      </div>

    </Router>
  );
}

export default App;
