
var data = [19, 70, 60, 40, 100, 10, 50, 80];


var svgW = 400;
var svgH = 300;
var pad = 2;


var scaleW = d3.scale.linear().domain([d3.min(data), d3.max(data)]).range([10, svgW]);

var scaleH = d3.scale.linear()
  .domain([0, data.length]) //input values
  .range([10, svgH]); //output in pixes

// create a SVG area to draw on
var svg = d3.select("body")
  .append("svg")
  // use the global variables to set the W and H
  .attr("width", svgW)
  .attr("height", svgH)

  // just a little style to help us see the SVG area limits
  .style("border", "solid 1px lightgrey")
  .style("padding", "10px");

// lets draw the bars
var bars = svg.selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("height", svgH / data.length - pad)
  .attr("width", function (d) { return scaleW(d + 1); })
  .attr("y", function (d, i) { return i * svgH / data.length });