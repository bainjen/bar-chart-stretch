

let data = [
  {
    name: 'Prairie',
    age: 6,
  },
  {
    name: 'Pippa',
    age: 8,
  },
  {
    name: 'Po',
    age: 14,
  },
  {
    name: 'Ziggy',
    age: 3,
  },
  {
    name: 'Jane Goodall',
    age: 7,
  },
];



let options = {
  chartName: 'My dogs',
  chartNameSize: '37px',
  chartNameColor: 'red',
  // width: 5,
  // height: '50%',
  barColor: 'yellow',
  barLabelColor: 'red',
  barLabelSize: '16px',
  titleY: 'dog ages',
  titleYSize: '27px',
  titleX: 'dog names',
  titleXSize: '27px',
  numOfTicks: '5'

};

function findMaxY(data, yKey) {
  let max = 0;
  for (let j = 0; j < data.length; j++) {
    let num = data[j][yKey];
    if (num > max) {
      max = num;
    }
  }
  return max;
};

function convertBarPercent(value, maxValue) {
  return (value / maxValue) * 100;
};

function appendTicks(options, data) {
  const maxVal = findMaxY(data, 'age')
  const numAreas = parseInt(options.numOfTicks) + 1
  const interval = maxVal / numAreas
  const chartHeight = $('.graph-container').height()
  const chartWidth = $('.graph-container').width()

  for (l = 0; l < options.numOfTicks; l++) {
    const currentTickVal = (l + 1) * interval
    $('.y-ticks').append(`<p id='grid-line'>${currentTickVal.toFixed(1)}</p>`);


    // $('#grid-line').css({
    //   // 'display': 'flex',
    //   'color': 'gray',

    // });
    $('.y-ticks').append(`<div id='tickline-${l}' class='tickline'></div>`)

    $(`#tickline-${l}`).css({
      'position': 'absolute',
      'left': '-3px',
      'width': '40px',
      'height': '2px',
      'background-color': 'black',
      'bottom': (chartHeight/ (parseInt(options.numOfTicks) + 1)) * (l + 1)
      // 'bottom': `${chartHeight * ((l + 1)/ parseInt(options.numTicks) )}px`
    })

    $('.y-ticks').css({
      'display': 'flex',
      'flex-direction': 'column-reverse',
      'position': 'absolute',
      'left': '18%',
      'height': '70vh',
      'padding-top': '1em',
      'width': '12px',
      'justify-content': 'space-evenly',
      'color': 'green'
      // 'border': '2px black solid'
    })
  }
}

function createGraphArea(element, options, data) {
  $(element).append(`
  <div class="graph-section">
    <h1 class="graph-title">${options.chartName}</h1>
    <div class='Y-Graph'>
      <div id='y-title'><h3 class='y-title'>${options.titleY}</h3></div>
      <div class="graph-container">
      <div class='y-ticks'></div>
      </div>
    </div>
    <h3 class='x-title'>${options.titleX}</h3>
  </div>`);

  $('.graph-title').css({ 'color': options.chartNameColor, 'font-size': options.chartNameSize });
  $('.Y-Graph').css({ 'display': 'flex', 'flex-direction': 'row' });
  $('#y-title').css({
    'display': 'flex',
    'align-items': 'center'
  });
  $('.y-title').css({
    'transform': 'rotate(-90deg)',
    'margin': '1em',
    'font-size': options.titleYSize
  });
  // $('#grid-line').css({
  //   'color': 'gray',

  // });

  $('.graph-container').css({
    'display': 'flex',
    'justify-content': 'space-evenly',
    'height': '70vh',
    'padding-top': '1em'
  });

  console.log($('.graph-container').height())


  appendTicks(options, data);
}




function addBar(data, xVar, yVar) {
  const maxVal = findMaxY(data, yVar);
  console.log(`this is the max val ${maxVal}`)
  for (let i = 0; i < data.length; i++) {
    $('.graph-container').append(`<div id="bar-${i}" class="bar"><p class='yData'>${data[i][yVar]}</p><p class='xData'>${data[i][xVar]}</p></div>`);

    $(`#bar-${i}`).css({
      'height': `${convertBarPercent(data[i][yVar], maxVal)}%`
    })
  }
  $('.bar').css({
    'display': 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-between',
    'align-items': 'center',
    'margin-bottom': '0',
    'background-color': options.barColor,
  });
  $('.yData').css(
    {
      'color': options.barLabelColor,
      'font-size': options.barLabelSize
    })
  $('.xData').css(
    {
      'color': options.barLabelColor,
      'font-size': options.barLabelSize,
      'margin-bottom': '0'
    })
};




//this is the final function we should call to draw the chart. I can write other mini functions to go into this final function
let drawBarChart = (data, options, element) => {
  console.log("my name is jen")


};


$(document).ready(function () {
  createGraphArea('main', options, data);
  addBar(data, 'name', 'age');
  // appendTicks(options);
  drawBarChart();

})


//A FEW BASICS
// .add()
// Create a new jQuery object with elements added to the set of matched elements.

// .append()
// Insert content, specified by the parameter, to the end of each element in the set of matched elements.

// .appendTo()
// Insert every element in the set of matched elements to the end of the target.

// .width()

//.data()
//Store arbitrary data associated with the matched elements or return the value at the named data store for the first element in the set of matched elements.
// console.log($('#grname').val());


//   let stepOne = {
//     grname: $('grname').val(),
//     yaxis: $('yaxis').val(),
//     xaxis: $('xaxis').val(),
//     numOfBars: $('numOfBars').val
//   }

// let chartName;
// let barData = [];
// let graphData = {};


// const barInfo = (data) => {
//   const { numOfBars } = data;
//   for (let i = 0; i < numOfBars; i++){
//     console.log('hello')
//   }
// }



// const basicInfo = () => {
//   $('input#submitbtn1').on('click', function (e) {
//     e.preventDefault();


//     graphData = {
//       grname: $('input#grname').val(),
//       yaxis: $('input#yaxis').val(),
//       xaxis: $('input#xaxis').val(),
//       numOfBars: Number($('input#numOfBars').val())
//     };



//     // graphData = stepOneInput;
//     // console.log(graphData);
//     // console.log(barData)
//     $('form#stepOne').hide();
//     // barInfo(graphData)
//   console.log(graphData)
//     // return graphData


// // function barInfo() {
//   // const graphData = basicInfo()
//   // console.log(graphData);
//   for (let i = 0; i < graphData.numOfBars; i++) {
//     let xNames = $('form#stepTwo').append('<label for="xaxis">' + $('input#xaxis').val() + ' ' + [i + 1] + '</label><input type="text" id="xaxis" name="xaxis"><br><br>')
//     let yNames =$('form#stepTwo').append('<label for= "yaxis" > '+$('input#yaxis').val()+' '+[i+1]+'</label > <input type="text" id="yaxis" name="yaxis"><br><br>')
//     console.log('hello')
//   }

//     $('form#stepTwo').append('<input type="button" id="submitbtn2" value="Submit"></input>')
//     $('input#submitbtn2').on('click', function (e) {
//       e.preventDefault;
//       console.log('submitted')
//       // let newData1 = document.getElementById("input#xaxis").value;
//       // let newData2 = $('input#yaxis').value;

//     })
//   // return newForms;
// // }
//   });

// };



// function addBar(num, label) {
//   for (let i = 0; i < num; i++) {
//     let name = barData[i].name
//     // const { name, age } = barData[i];
//     $('.graph-container').append('<div class="bar"><p>'+name+'</p></div>');
//   }
// }

// function setChartNames() {
//   $('.graph-title').replaceWith(chartName);
// //need to tie this to user submission
// }




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
