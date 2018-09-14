
// create a SVG area to draw on


var svg = d3.select("body")
  .append("svg")
  .attr("width", 400)
  .attr("height", 300)
  .style("border", "solid 1px lightgrey")
  .style("padding", "10px")


// Create some data. 
// Each data value is also known as "d"
// (10, 20, 40, 80)
// The ORDER of each data point 
// is called index and known by "i"
// (0, 1, 2, 3)
// keep these in mind, they will serve
// as FOOD for our shapes.


var data = [10, 20, 40, 80]

/* OBJECTIVE
Let's set some rectangles bars and bind the 
data value to their width attributes, just
so that we can plot a simple bar graph.

NOTE ABOUT DATA BINDING IN D3
The hardest part of learning D3 is to understand
how it selects the elements in the page. Let's say
I want to "create" some rectangle bars. D3 starts 
creating these bars by "selecting" them BEFORE they
exist. 

Just pretend tha you are God and you are selecting 
the "souls" you want to materialize.

That's the power of the selectAll() function! 
It makes you the God of Shapes!

Let's select some Rectangle Souls...
*/

var bars = svg.selectAll("rect") // Select SOULS 
  .data(data) // hey SOULS! here's some FOOD!
  .enter() // SOULS, you will be born as...
  .append("rect") // ... Rectangles
  .attr("height", 20)
  .attr("width", // your width will be...
    function (d) { return d * 2 }) // FOOD known as "d" 
  .attr("y",
    function (d, i) { return i * 50 }) // FOOD known as "i" 

// Let there be light!