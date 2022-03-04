/* globals Chart:false, feather:false */
const Base_URL_DATE = "http://localhost:3000/orders/orderApi"


const fetchApiOrders = async() => {
  var t2 = 0;
  var t3 = 0;
  var t4 = 0;
  var t5 = 0;
  var t6 = 0;
  var t7 = 0;
  var cn = 0;

  await fetch(`${Base_URL_DATE}`)
    .then(response => response.json())
    .then(data => {
      data.map((item) => {
        var time = item.date;
        var dt = moment(time, "MM/DD/YYYY");
        var nameDay = dt.format("dddd");
        console.log(dt);
        let thu = nameDay;
        if(thu == "Monday") {
          t2 = t2 + 10;
        }
        else if (thu == "Tuesday"){
          t3 = t3 + 10;
        }
        else if (thu == "Wednesday"){
          t4 = t4 + 10;
        }
        else if (thu == "Thursday"){
          t5 = t5 + 10;
        }
        else if (thu == "Friday"){
          t6 = t6 + 10;
        }
        else if (thu == "Saturday"){
          t7 = t7 + 10;
        }
        else if (thu == "Sunday"){
          cn = cn + 10;
        }
      })
    })
  .then(() => {
  (function () {
    'use strict'

    feather.replace({ 'aria-hidden': 'true' })

    // Graphs
    var ctx = document.getElementById('myChart')
    // eslint-disable-next-line no-unused-vars
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        datasets: [{
          data: [
            cn,
            t2,
            t3,
            t4,
            t5,
            t6,
            t7,
          ],
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })
  })()


        
  })
}

fetchApiOrders();