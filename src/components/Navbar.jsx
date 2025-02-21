import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
     <img src="../assets/public/logo-WeBeer-modified.png" alt="logo" />
     </Link>
     <h2>WeBeer</h2>
    </nav>
  );
};

export default Navbar;
