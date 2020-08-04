



let data = [1, 2, 3, 4, 5];

let options = {
  width: 5,
  height: 10,
  barColor: 'red',
  labelColor: 'black',
  titleMain: 'Hello',
  titleY: 'y title',
  titleX: 'x title',

}

//A FEW BASICS
// .add()
// Create a new jQuery object with elements added to the set of matched elements.

// .append()
// Insert content, specified by the parameter, to the end of each element in the set of matched elements.

// .appendTo()
// Insert every element in the set of matched elements to the end of the target.

// .width()

// <canvas>	Used to draw graphics, on the fly, via scripting (usually JavaScript)

function addBar() {

}

//this is the final function we should call to draw the chart. I can write other mini functions to go into this final function
let drawBarChart = (data, options, element) => {

};

//INSTRUCTIONS FROM COMPASS
// The data parameter will be the data the chart should work from Start with just an Array of numbers
// e.g. [1, 2, 3, 4, 5]

// The options parameter should be an object which has options for the chart.
// e.g. width and height of the bar chart

// The element parameter should be a DOM element or jQuery element that the chart will get rendered into.

// DISPLAY REQUIREMENTS
// Bar Chart
// Display a list of single values, horizontally as a bar chart

// Numerical values should also be displayed inside of the bar
// The position of values should be customizable too:
// Top, centre or bottom of the bar.
// Bar sizes should be dependent on the data that gets passed in

// Bar width should be dependent on the total amount of values passed.
// Bar height should be dependent on the values of the data.
// Bar properties that should be customizable:

// Bar Colour
// Label Colour
// Bar spacing (space between bars)
// Bar Chart axes
// X-axis should show labels for each data value

// Think about how you would need to structure your data to associate a label to each value---> OBJECT
// Y-axis should show ticks at certain values

// Think about where you would configure these values. Should they be part of the data or the options to the bar chart function.
// The title of the bar chart should be able to be set and shown dynamically

// The title of the bar chart should also be customizable:

// Font Size
// Font Colour
// Multiple Value (Stacked) bar charts
// Allow the user to pass multiple values for each bar.

// Think about how you would need to structure this data compared to a single bar chart.
// This should also support all the features of the single bar chart, including

// Customizable bar colours, per value
// Customizable label colours
