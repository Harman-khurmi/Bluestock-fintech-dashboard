import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const CircularChart = ({ value, maxValue, size, backgroundColor, fillColor }) => {
  const svgRef = useRef();

  useEffect(() => {
    const padding = 20; // Add padding to ensure the chart is not cut off

    const svg = d3.select(svgRef.current)
      .attr('width', size + padding * 2)
      .attr('height', size + padding * 2)
      .style('background-color', backgroundColor);

    // Clear previous content
    svg.selectAll('*').remove();

    const g = svg.append('g')
      .attr('transform', `translate(${size / 2 + padding}, ${size / 2 + padding})`);

    const radius = size / 2;
    const thickness = 10;
    const angleScale = d3.scaleLinear()
      .domain([0, maxValue])
      .range([0, 2 * Math.PI]);

    // Circular filled chart
    const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius)
      .startAngle(0)
      .endAngle(2 * Math.PI); // Always a complete circle

    g.append('path')
      .attr('d', arc)
      .attr('fill', fillColor);

    // Outer ring
    const outerArc = d3.arc()
      .innerRadius(radius + thickness)
      .outerRadius(radius + thickness + 3)// to change thickness of outer circle
      .startAngle(0)
      .endAngle(angleScale(value));

    g.append('path')
      .attr('d', outerArc)
      .attr('fill', fillColor);

    // Text value
    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '.35em')
      .attr('fill', 'white') // Changed to white
      .style('font-size', '24px')
      .text(value);

  }, [value, maxValue, size, backgroundColor, fillColor]);

  return (
    <svg ref={svgRef}></svg>
  );
};

export default CircularChart;
