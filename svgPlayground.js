
// just a circle 

var svg = d3.select("body")
  .append("svg")
  .attr("width", 400)
  .attr("height", 300)
  .style("border", "solid 1px lightgrey")
  .style("padding", "10px")
  ;

var circle = svg.append("circle")
  .attr("cx", 100) //horizontal center
  .attr("cy", 100) //vertical center
  .attr("r", 50) //radius
  .style("fill", "#ff6600")
  .style("stroke", "#666666")
  .style("stroke-width", 10)


// couple  of rectangles and a line

var svg = d3.select("body")
  .append("svg")
  .attr("width", 400)
  .attr("height", 300)
  .style("border", "solid 1px lightgrey")
  .style("padding", "10px")
  ;

var rect = svg.append("rect")
  .attr("width", 100)
  .attr("height", 100)
  .style("fill", "#66aaff")
  .style("stroke", "0033ff")
  .style("stroke-width", 3);

var rect = svg.append("rect")
  .attr("x", 120) // move this box 120px to the right
  .attr("width", 100)
  .attr("height", 100)
  .attr("rx", 20) // corner radius
  .attr("ry", 20) // corner radius
  .style("fill", "yellow")
  .style("stroke", "#666666") // border color
  .style("stroke-width", 3) // border width

var circle = svg.append("circle")
  .attr("cx", 240)
  .attr("cy", 50)
  .attr("r", 40)
  .style("fill", "blue")
  .style("stroke", "red")
  .style("stroke-width", 3)
  .style("opacity", 0.75);

var line = svg.append("line")
  .attr("x1", 0)
  .attr("y1", 120)
  .attr("x2", 220)
  .attr("y2", 120)
  .style("stroke", "pink")
  .style("stroke-width", 10)
  .style("stroke-linecap", "round")

var line = svg.append("line")
  .attr("x1", 0)
  .attr("y1", 150)
  .attr("x2", 220)
  .attr("y2", 300)
  .style("stroke", "lightgreen")
  .style("stroke-width", 5)
  .style("stroke-linecap", "round")
  .style("stroke-dasharray", 20);

