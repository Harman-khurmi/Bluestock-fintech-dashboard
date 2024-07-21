import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ManageIPO from './pages/ManageIPO';
import IPOSubscription from './pages/IPOSubscription';
import IPOAllotment from './pages/IPOAllotment';
import Settings from './pages/Settings';
import APIManager from './pages/APIManager';
import Accounts from './pages/Accounts';
import Help from './pages/Help';
import './App.css';
import SignIn from '../src/pages/SignIn';
import SignUp from '../src/pages/SignUp';
import Forgotpass from '../src/pages/Forgotpass';
import RegisterIPO from './pages/RegisterIPO';

//
import MainLayout from '../src/layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="main-content">
          {/* <Sidebar /> */}
          {/* <Navbar /> */}
          <Routes>
            <Route element={<AuthLayout />}>
              <Route path="/SignIn" element={<SignIn />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/Forgotpass" element={<Forgotpass />} />
            </Route>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/manage-ipo" element={<ManageIPO />} />
              <Route path="/register-ipo" element={<RegisterIPO />} />
              <Route path="/ipo-subscription" element={<IPOSubscription />} />
              <Route path="/ipo-allotment" element={<IPOAllotment />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/api-manager" element={<APIManager />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/help" element={<Help />} />
            </Route>

          </Routes>
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
