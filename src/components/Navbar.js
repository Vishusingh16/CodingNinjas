import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">
          <img src="/logo.png" alt='' className="logo" />
          <span className="logo-text">Coding Ninjas</span>
        </a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/courses" className="nav-link">Courses</a>
        </li>
        <li className="nav-item">
          <a href="/practice" className="nav-link">Practice</a>
        </li>
        <li className="nav-item">
          <a href="/events" className="nav-link">Events</a>
        </li>

        <li className="nav-item">
          <a href="/contact" className="nav-link">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
