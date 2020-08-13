

let data = [
  {
    name: 'Chewey',
    age: 11,
  },
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
  {
    name: 'Pixie',
    age: 16,
  },
  {
    name: 'Zoe',
    age: 9,
  },
];



let options = {
  chartName: 'My dogs',
  chartNameSize: '37px',
  chartNameColor: '#006666',
  backgroundColor: 'rgb(158, 220, 220)',
  borderColor: '#e6ffff',
  barColor: '#ff80df',
  barLabelColor: '#cc0099',
  barLabelSize: '16px',
  titleY: 'dog ages',
  titleYSize: '27px',
  titleYColor: '#006666',
  titleX: 'dog names',
  titleXSize: '27px',
  titleXColor: '#006666',
  numOfTicks: '7',
  valColor: '#e6ffff'

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
    $('.y-ticks').append(`<div id='tickdiv-${l}'>
                            <p id='tickval-${l}'>${currentTickVal.toFixed(1)}</p>
                            <div id='tickline-${l}' class='tickline'></div>
                          </div>`);


    $('.y-ticks').css({
      'display': 'flex',
      'flex-direction': 'column-reverse',
      'position': 'relative',
      'left': '-35px',
      'height': '70vh',
      'padding-top': '1em',
      'justify-content': 'space-evenly',
      'color': options.valColor
    })

    $(`#tickdiv-${l}`).css({
      'display': 'flex',
      'flex-direction': 'column-reverse',
    })

    $(`#tickval-${l}`).css({
      'position': 'absolute',
      'left': '-3px',
      'height': '2px',
    })

    $(`#tickline-${l}`).css({
      'position': 'absolute',
      'left': '-3px',
      'width': '79vw',
      'height': '2px',
      'background-color': options.valColor,
      'opacity': '25%',
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
    'font-size': options.titleYSize,
    'color': options.titleYColor
  });
  $('.x-title').css({
    'font-size': options.titleXSize,
    'color': options.titleXColor
  });

  $('.graph-container').css({
    'display': 'flex',
    'justify-content': 'space-evenly',
    'height': '70vh',
    'padding-top': '1em',
    'background-color' : options.backgroundColor
  });

  console.log($('.graph-container').height())

  appendTicks(options, data);
}




function addBar(data, xVar, yVar) {
  const maxVal = findMaxY(data, yVar);
  console.log(`this is the max val ${maxVal}`)
  for (let i = 0; i < data.length; i++) {
    $('.graph-container').append(`<div id="bar-${i}" class="bar"><p class='yData'>${data[i][yVar]}</p><p class='xData'>${data[i][xVar]}</p></div>`);

    $('.graph-container').css({
      'border-color' : options.borderColor
    })

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
    'font-family': "'Yantramanav', sans-serif"
  });

  $('.yData').css(
    {
      'color': options.barLabelColor,
      'font-size': options.barLabelSize,
      'text-align': 'center',
      'margin-top': '-1em',
    })
  $('.xData').css(
    {
      'color': options.barLabelColor,
      'font-size': options.barLabelSize,
      'margin-bottom': '-2em',
      'margin-top': '2px',
      'text-align': 'center'
    })
};




//this is the final function we should call to draw the chart. I can write other mini functions to go into this final function
let drawBarChart = (data, options, element) => {
  createGraphArea('main', options, data);
  addBar(data, 'name', 'age');

};


$(document).ready(function () {

  drawBarChart(data, options, 'main');

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
