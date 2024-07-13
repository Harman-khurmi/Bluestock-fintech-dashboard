import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import './MainLayout.css'; // Create this CSS file for layout-specific styles if needed

// const MainLayout = () => {
//   return (
//     <div className="main-layout">
//       <Navbar />
//       <Sidebar />
//       <div className="content">
//         <Outlet />
//       </div>
//     </div>
//   );
// };
const MainLayout = () => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default MainLayout;
