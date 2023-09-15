import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

function HeatMap({ data }) {
  const svgRef = useRef();

  useEffect(() => {
    // Define the dimensions and margins for the chart
    const width = 400;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    // Calculate the inner dimensions of the chart (excluding margins)
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Create an SVG element and append it to the DOM
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Create a group (g) element to contain the chart content
    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Define a color scale for the heatmap
    const colorScale = d3
      .scaleSequential(d3.interpolateOranges)
      .domain([0, d3.max(data)]);

    // Create the heatmap rectangles
    g.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => (i % 5) * (innerWidth / 5))
      .attr("y", (d, i) => Math.floor(i / 5) * (innerHeight / 5))
      .attr("width", innerWidth / 5)
      .attr("height", innerHeight / 5)
      .style("fill", (d) => colorScale(d));
  }, [data]);

  return (
    <div className="bg-white border rounded shadow-lg w-fit ">
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default HeatMap;
