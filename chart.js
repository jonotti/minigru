var ctx = document.getElementById("myChart").getContext("2d");

/*var test = [];
$.getJSON("data.json", function (json) {
    test.push(json.posts[i]);

});*/

var scatterChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'Hitastig C°',
            data: [{
                x: -10,
                y: 0
            }, {
                x: 0,
                y: 10
            }, {
                x: 3,
                y: 5
            },
            {
                x: 6,
                y: 7
            },
            {
                x: 8,
                y: 11
            },{
                x: 10,
                y: 0
            }]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});