import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/public/logo-WeBeer-modified.png';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
     <img src={logo} alt="logo" />
     </Link>
     <h2>WeBeer</h2>
    </nav>
  );
};

export default Navbar;
