import React from "react";
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <h5>© 2024 Your Company Name. All rights reserved.</h5>
      <div>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </div>
    </footer>
  );
}

export default Footer;
