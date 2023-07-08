import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './Pages/AboutPage/AboutPage';


import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

      </div>

    </Router>
  );
}

export default App;
