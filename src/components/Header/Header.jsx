// Header.jsx

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">WhyteBoard - Developed By <a href="https://anupamshakya.com">Anupam</a></h1>
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item"><a href="/contact.jsx">Home</a></li>
            <li className="nav-item"><a href="#">Features</a></li>
            <li className="nav-item"><a href="#">About</a></li>
            <li className="nav-item"><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
