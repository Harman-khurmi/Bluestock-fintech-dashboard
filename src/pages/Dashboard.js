import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from 'recharts';
import './Dashboard.css';
import MultiCircularChart from '../components/MultiCircularChart';
import DoughnutChart from '../components/DoughnutChart';
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-heading">Dashboard</h1>
      <div className="dashboard-sections">
        <div className="section ipo-dashboard">
          <h2>IPO Dashboard India</h2>
          <h4>IPO in Gain</h4>
          <div className="charts">
            <div>
              <MultiCircularChart />
            </div>
          </div>
        </div>
        <div className="section quick-links">
          <h2>Quick Links</h2>
          <h4>Lorem ipsum dolor sit amet consectetur
          </h4>
          <ul>
            <li>
              <div className="logo">
                <img src="broker1-logo.png" alt="" />
              </div>
              <p> NSE India</p>
              <a href="/">Visit Now</a>
            </li>
            <li>
              <div className="logo">
                <img src="broker2-logo.png" alt="" />
              </div>
              <p> BSE India</p>
              <a href="/">Visit Now</a>
            </li>
            <li>
              <div className="logo">
                <img src="broker3-logo.png" alt="" />
              </div>
              <p> SEBI</p>
              <a href="/">Visit Now</a>
            </li>
            <li>
              <div className="logo">
                <img src="broker4-logo.png" alt="" />
              </div>
              <p>Money Control</p>
              <a href="/">Visit Now</a>
            </li>
          </ul>
        </div>
        <div className="section pie-chart-section">
          <h2>
            Main Board IPO <button className="view-report-btn">View Report</button>
          </h2>
          <h4>From 8 Jul 2024</h4>
          <ResponsiveContainer width="100%" height={250}>
            <DoughnutChart />
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
