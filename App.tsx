import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
