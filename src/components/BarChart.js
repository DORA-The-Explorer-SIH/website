import React, { useEffect, useRef, useMemo } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {
  const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  const width = 400 - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;

  const svgRef = useRef();

  // Compute x, y, and other variables using useMemo
  const { x, y } = useMemo(() => {
    const xScale = d3.scaleBand()
      .domain(data.map((d, i) => i))
      .range([0, width])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .nice()
      .range([height, 0]);

    return { x: xScale, y: yScale };
  }, [data, height, width]);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    // Rest of your code using x and y

  }, [data, x, y]);

  return (
    <div className="bg-white border rounded shadow-lg ">
      <svg width={width + margin.left + margin.right} height={height + margin.top + margin.bottom} ref={svgRef}>
        <g transform={`translate(${margin.left},${margin.top})`}></g>
      </svg>
    </div>
  );
};

export default BarChart;
