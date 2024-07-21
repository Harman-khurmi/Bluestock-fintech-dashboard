// import React from 'react';
import CircularChart from './CircularChart';

const MultiCircularChart = () => {
  return (
    <div className="multi-chart-container">
      <div className="chart chart1">
        <CircularChart
          value={30}
          maxValue={100}
          size={190}
          // backgroundColor="#f0f0f0"
          fillColor="#F99C30"
        />
      </div>
      <div className="chart chart2">
        <CircularChart
          value={9}
          maxValue={100}
          size={100}
          // backgroundColor="#f0f0f0"
          fillColor="#6463D6"
        />
      </div>
      <div className="chart chart3">
        <CircularChart
          value={20}
          maxValue={100}
          size={140}
          // backgroundColor="#f0f0f0"
          fillColor="#2FBFDE"
        />
      </div>
    </div>
  );
};

export default MultiCircularChart;
