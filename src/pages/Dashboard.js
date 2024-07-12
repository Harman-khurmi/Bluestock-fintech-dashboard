import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from 'recharts';
import './Dashboard.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const ipoData = {
    labels: ['In Loss', 'In Profit', 'Total IPO'],
    datasets: [
      {
        data: [20, 50, 70],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
        hoverBackgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
      },
    ],
  };

  const mainBoardData = {
    labels: ['Ongoing', 'Upcoming', 'New Listed'],
    datasets: [
      {
        data: [10, 20, 5],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
        hoverBackgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
      },
    ],
  };

  const data = [
    { name: 'Upcoming', value: 15 },
    { name: 'New Listed', value: 25 },
    { name: 'Ongoing', value: 20 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-heading">Dashboard</h1>
      <div className="dashboard-sections">
        <div className="section ipo-dashboard">
          <h2>IPO Dashboard India</h2>
          <h4>IPO in Gain</h4>
          <div className="charts">
            <div className="chart">
              <Doughnut data={ipoData} />
              <p>In Loss</p>
            </div>
            <div className="chart">
              <Doughnut data={ipoData} />
              <p>In Profit</p>
            </div>
            <div className="chart">
              <Doughnut data={ipoData} />
              <p>Total IPO</p>
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
              <p> NSE India</p> 
              <a href="/">Visit Now</a>
            </li>
            <li>
              <div className="logo">
              <img src="broker3-logo.png" alt="" />
              </div>
              <p> NSE India</p> 
              <a href="/">Visit Now</a>
            </li>
            <li>
              <div className="logo">
              <img src="broker4-logo.png" alt="" />
              </div>
              <p> NSE India</p>
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
            <PieChart width={400} height={400}>
              <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={onPieEnter}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
