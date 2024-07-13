import React from 'react';
import { Outlet } from 'react-router-dom';
import '../layouts/AuthLayout.css';

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
