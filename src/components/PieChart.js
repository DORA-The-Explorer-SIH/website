import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChart = ({ data, colors }) => {
  const width = 350;
  const height = 250;
  const radius = Math.min(width, height) / 2;

  const svgRef = useRef();
  const legendRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const pie = d3.pie().value(d => d);

    const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);

    const colorScale = d3.scaleOrdinal(colors);

    const arcs = pie(data);

    const g = svg.append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    g.selectAll('path')
      .data(arcs)
      .enter().append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => colorScale(i));

   
  }, [data, colors]);

  return (
    <div cl>
      <svg width={width} height={height} ref={svgRef}></svg>
    </div>
  );
};

export default PieChart;
