import React from 'react';
import '../components/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <i class="ri-search-line"></i>
      </div>
      <div className="user-info">
        <i className="icon-user"></i> John Doe
        <i className="icon-dropdown"></i>
        <i className="icon-bell"></i>
      </div>
    </div>
  );
}

export default Navbar;
