import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {
  const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  const width = 400 - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;

  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const x = d3.scaleBand()
      .domain(data.map((d, i) => i))
      .range([0, width])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .nice()
      .range([height, 0]);

    // Append the bars first
    svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)
      .selectAll('rect')
      .data(data)
      .enter().append('rect')
      .attr('x', (d, i) => x(i))
      .attr('y', d => y(d) - 20) // Add 10 pixels of padding to the bottom
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(d))
      .attr('fill', 'steelblue');

    // Append the y-axis next
    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    // Append the x-axis last
    svg.append('g')
      .attr('transform', `translate(${margin.left},${height})`)
      .call(d3.axisBottom(x).tickFormat((d, i) => i));

  }, [data]);

  return (
    <div className="bg-white border rounded shadow-lg ">
      <svg width={width + margin.left + margin.right} height={height + margin.top + margin.bottom} ref={svgRef}>
        <g transform={`translate(${margin.left},${margin.top})`}></g>
      </svg>
    </div>
  );
};

export default BarChart;
