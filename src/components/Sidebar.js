import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
import '../components/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="menu-section">
        <h5>Main Menu</h5>
        <Link to="/dashboard" className="menu-item">
          <i className="icon-dashboard"></i> Dashboard
        </Link>
        <Link to="/manage-ipo" className="menu-item">
          <i className="icon-manage-ipo"></i> Manage IPO
        </Link>
        <Link to="/ipo-subscription" className="menu-item">
          <i className="icon-ipo-subscription"></i> IPO Subscription
        </Link>
        <Link to="/ipo-allotment" className="menu-item">
          <i className="icon-ipo-allotment"></i> IPO Allotment
        </Link>
      </div>
      <div className="menu-section">
        <h5>Other Options</h5>
        <Link to="/settings" className="menu-item">
          <i className="icon-settings"></i> Settings
        </Link>
        <Link to="/api-manager" className="menu-item">
          <i className="icon-api-manager"></i> API Manager
        </Link>
        <Link to="/accounts" className="menu-item">
          <i className="icon-accounts"></i> Accounts
        </Link>
        <Link to="/help" className="menu-item">
          <i className="icon-help"></i> Help
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
