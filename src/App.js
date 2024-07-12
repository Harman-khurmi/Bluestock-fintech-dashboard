import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ManageIPO from './pages/ManageIPO';
import IPOSubscription from './pages/IPOSubscription';
import IPOAllotment from './pages/IPOAllotment';
import Settings from './pages/Settings';
import APIManager from './pages/APIManager';
import Accounts from './pages/Accounts';
import Help from './pages/Help';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/manage-ipo" element={<ManageIPO />} />
            <Route path="/ipo-subscription" element={<IPOSubscription />} />
            <Route path="/ipo-allotment" element={<IPOAllotment />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/api-manager" element={<APIManager />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
