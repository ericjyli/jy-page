import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import TitlePage from './components/TitlePage/TitlePage';
import MainPage from './components/MainPage/MainPage';
import AboutPage from './components/AboutPage/AboutPage';
import ExperiencesPage from './components/ExperiencesPage/ExperiencesPage';
import ContactPage from './components/ContactPage/ContactPage';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" component={TitlePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/experiences" component={ExperiencesPage} />
          <Route path="/contact" component={ContactPage} />
        </Routes>
        <MainPage />
      </div>
    </Router>
  );
};

export default App;