import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  //code for menu option click bg
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(location.pathname);

  const handleButtonClick = (path) => {
    setActiveButton(path);
  };
  // end

  return (
    <div className="sidebar">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="menu-section">
        <h5>MENU</h5>
        <Link to="/dashboard" className={`menu-item ${activeButton === '/dashboard' ? 'active' : ''}`} onClick={() => handleButtonClick('/dashboard')}>
          <i class="fa-solid fa-square-poll-vertical"></i>
          Dashboard
        </Link>
        <Link to="/manage-ipo" className={`menu-item ${activeButton === '/manage-ipo' ? 'active' : ''}`} onClick={() => handleButtonClick('/manage-ipo')}>
          <i class="fa-solid fa-cart-shopping"></i>Manage IPO
        </Link>
        <Link to="/ipo-subscription" className={`menu-item ${activeButton === '/ipo-subscription' ? 'active' : ''}`} onClick={() => handleButtonClick('/ipo-subscription')}>
          <i class="fa-solid fa-file-lines"></i>
          IPO Subscription
        </Link>
        <Link to="/ipo-allotment" className={`menu-item ${activeButton === '/ipo-allotment' ? 'active' : ''}`} onClick={() => handleButtonClick('/ipo-allotment')}>
          <i class="fa-solid fa-comment-dots"></i> IPO Allotment
        </Link>
      </div>
      <div className="menu-section">
        <h5>Other Options</h5>
        <Link to="/settings" className={`menu-item ${activeButton === '/settings' ? 'active' : ''}`} onClick={() => handleButtonClick('/settings')}>
          <i class="fa-solid fa-gear"></i> Settings
        </Link>
        <Link to="/api-manager" className={`menu-item ${activeButton === '/api-manager' ? 'active' : ''}`} onClick={() => handleButtonClick('/api-manager')}>
          <i class="fa-solid fa-wallet"></i> API Manager
        </Link>
        <Link to="/accounts" className={`menu-item ${activeButton === '/accounts' ? 'active' : ''}`} onClick={() => handleButtonClick('/accounts')}>
          <i class="fa-solid fa-user"></i> Accounts
        </Link>
        <Link to="/help" className={`menu-item ${activeButton === '/help' ? 'active' : ''}`} onClick={() => handleButtonClick('/help')}>
          <i class="fa-solid fa-circle-info"></i> Help
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
