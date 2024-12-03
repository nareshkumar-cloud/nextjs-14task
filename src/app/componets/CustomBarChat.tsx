import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
// import {} from 'd3';


// Define the types for the props
interface MonthlyData {
  month: string;
  value: number;
}

interface BarChartProps {
  monthly: {
    monthly: MonthlyData[];
  };
  borderRadius?: number; // Optional borderRadius prop
  unfilledColor?: string; // Optional unfilled color prop
  fillerColor?: string; // Optional filled color prop
}

const BarChart: React.FC<BarChartProps> = (props) => {
  const svgRef = useRef<SVGSVGElement | null>(null); // Properly typed svgRef
  const [chartDimensions, setChartDimensions] = useState({ width: 500, height: 300 });

  // Update chart size based on the window width
  useEffect(() => {
    const handleResize = () => {
      const width = svgRef.current?.parentElement?.offsetWidth || 500; // Get container width
      const height = 300; // Fixed height for simplicity, but you can also make this dynamic
      setChartDimensions({ width, height });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial size calculation

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const data: number[] = [];
    const months: string[] = [];

    // Extracting data from props
    for (let i = 0; i < props.monthly.monthly.length; i++) {
      const month = props.monthly.monthly[i].month;
      const value = props.monthly.monthly[i].value;

      data.push(value);
      months.push(month);
    }

    const { width, height } = chartDimensions;
    const maxBarHeight = 200; // Max bar height
    const margin = { top: 20, right: 0, bottom: 50, left: 40 };
    const borderRadius = props.borderRadius || 8; // Default border radius

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('overflow', 'visible'); // Removed .style('background', '#fff')

    // Scales
    const xScale = d3.scaleBand()
      .domain(months)
      .range([margin.left, width - margin.right])
      .padding(0.3);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data) || 0])
      .range([height - margin.bottom, margin.top]);

    // Axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale).ticks(5);

    svg.selectAll('*').remove(); // Clear previous render

    // Add X Axis
    svg.append('g')
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(xAxis)
      .selectAll("text")
      .attr("transform", "rotate(-45)")
      .attr("text-anchor", "end")
      .attr("font-size", "12px")
      .attr("fill", "#333");

    // Add Y Axis
    svg.append('g')
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(yAxis);

    // Draw unfilled background bars
    svg.selectAll('.background-bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (_, i) => xScale(months[i]))
      .attr('y', margin.top)
      .attr('width', xScale.bandwidth())
      .attr('height', maxBarHeight)
      .attr('fill', props.unfilledColor || '#d3d3d3') // Unfilled color
      .attr('rx', borderRadius) // Apply border radius
      .attr('ry', borderRadius);

    // Draw filled bars
    svg.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (_, i) => xScale(months[i]))
      .attr('y', d => yScale(d))
      .attr('width', xScale.bandwidth())
      .attr('height', d => height - margin.bottom - yScale(d))
      .attr('fill', props.fillerColor || 'steelblue') // Filled color
      .attr('rx', borderRadius) // Apply border radius
      .attr('ry', borderRadius);

  }, [props, chartDimensions]); // Add chartDimensions as dependency

  return <svg ref={svgRef}></svg>;
};

export default BarChart;
