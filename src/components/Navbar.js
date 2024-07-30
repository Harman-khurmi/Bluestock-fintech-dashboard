import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="navbar">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <i class="ri-search-line"></i>
      </div>
      <div className="user-info">
        <div className="user"><i class="fa-solid fa-user"></i></div>
        Hi, Harman
        <div className="dropdown-nav" ref={dropdownRef}>
          <button onClick={toggleDropdown} className="dropdown-toggle">
            <i class="fa-solid fa-caret-down" id='arrow-down'></i>
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <a href="/profile" className="dropdown-item">Profile</a>
              <a href="/SignIn" className="dropdown-item">Sign In</a>
              <a href="/SignUp" className="dropdown-item">Logout</a>
            </div>
          )}
        </div>

      </div>
      <i class="fa-solid fa-bell" id='bell'></i>
    </div>
  );
}

export default Navbar;
