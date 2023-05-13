document.addEventListener ("DOMContentLoaded", () => {
  var xValues = ["S", "M", "T", "W", "T", "F", "S"];
  var yValues = [0, 50, 100, 150, 200, 250, 300];
  var barColors = ["rgb(115, 115, 181)", "rgb(115, 115, 181)", "rgb(115, 115, 181)", "rgb(115, 115, 181)", "rgb(115, 115, 181)", "rgb(115, 115, 181)", "rgb(115, 115, 181)"];
  
  var valuesX = ["Desktop", "Tablet", "Phones"];
  var valuesY = [200, 60, 40];
  var colors = [
  "rgb(115, 115, 181)",
  "rgb(151, 211, 151)",
  "rgb(92, 172, 203)",
  ];

  const xMen = [50,60,70,80,90,100,110,120,130,140,150];
  const yMen = [7,8,8,9,9,9,10,11,14,14,15];
  
  new Chart("myChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
      }
    }
  });


  new Chart("yours", {
    type: "doughnut",
    data: {
      labels: valuesX,
      datasets: [{
        backgroundColor: colors,
        data: valuesY
      }]
    },
    options: {
      title: {
        display: true,
      }
    }
  });




  
  new Chart("xmen", {
    type: "line",
    data: {
      labels: xMen,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "rgb(115, 115, 181)",
        borderColor: "rgb(115, 115, 181)",
        data: yMen
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        yAxes: [{ticks: {min: 6, max:16}}],
      }
    }
  });





});
