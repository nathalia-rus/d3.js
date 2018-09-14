// DOM SELECTION & MANIPULATION

d3.select('h3').style('color', 'red');
d3.select('h3').style('font-size', '24px');
d3.select('body').append('p').text('First Paragraph');
d3.select('body').append('p').text('Second Paragraph');
d3.select('body').append('p').text('Third Paragraph');
d3.selectAll('p').style('color', 'blue');