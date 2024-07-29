// src/components/DoughnutChart.js
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import "./DoughnutChart.css";

const data = [
  { label: "Upcoming", value: 40, time: "Morning", IPO: "IPO NSE & BSE" },

  { label: "New Listed", value: 25, time: "Afternoon", IPO: "IPO NSE & BSE" },

  { label: "Ongoing", value: 35, time: "Dinner", IPO: "IPO NSE & BSE" },
];

const colors = {
  Upcoming: "#5A6ACF",
  "New Listed": "#8593ED",
  Ongoing: "#C7CEFF",
};

const DoughnutChart = () => {
  const svgRef = useRef();
  const tooltipRef = useRef();

  useEffect(() => {
    const width = 220;
    const height = 220;
    const radius = Math.min(width, height) / 2;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const pie = d3.pie().value((d) => d.value);
    const arc = d3
      .arc()
      .innerRadius(radius * 0.5)
      .outerRadius(radius * 0.8);

    const arcs = svg
      .selectAll("arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    arcs
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => colors[d.data.label])
      .on("mouseover", (event, d) => {
        const tooltip = d3.select(tooltipRef.current);
        tooltip.transition().duration(200).style("opacity", 0.9);
        tooltip
          .html(
            `
          <strong>${d.data.time}</strong><br/>
          ${d.data.IPO}<br/>
          <strong> ${d.data.value}</strong>
        `
          )
          .style("left", `${event.pageX}px`)
          .style("top", `${event.pageY - 28}px`);
      })
      .on("mouseout", () => {
        d3.select(tooltipRef.current)
          .transition()
          .duration(500)
          .style("opacity", 0);
      });

    return () => {
      svg.selectAll("*").remove();
    };
  }, []);

  return (
    <div className="chart-container">
      <svg ref={svgRef}></svg>
      <div ref={tooltipRef} className="tooltip"></div>
      <div className="legend">
        {data.map((d) => (
          <div key={d.label} className="legend-item">
            <span
              className="legend-color"
              style={{ backgroundColor: colors[d.label] }}
            ></span>
            {d.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoughnutChart;
