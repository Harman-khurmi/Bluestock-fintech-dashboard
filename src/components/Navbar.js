import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <i class="ri-search-line"></i>
      </div>
      <div className="user-info">
        <div className="user"><i class="fa-solid fa-user"></i></div>
         Hi, Vishal
        <i class="fa-solid fa-caret-down" id='arrow-down'></i>
      </div>
        <i class="fa-solid fa-bell" id='bell'></i>
    </div>
  );
}

export default Navbar;
