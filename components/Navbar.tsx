import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Karim's Portfolio</h1>
      <div>
        <Link to="/">About Me</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  );
};

export default Navbar;
