(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/d3charts.js                                                  //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
d3.json("data.json", function (err, info) {                            // 1
  var svg = d3.select("#povertyChart");                                // 2
                                                                       //
  var data = info.povertyRates;                                        // 4
  console.log(data);                                                   // 5
                                                                       //
  var cHeight = 500;                                                   // 7
                                                                       //
  var maxRate = d3.max(data, function (d) {                            // 9
    return d.rate;                                                     // 9
  });                                                                  //
                                                                       //
  var yScale = d3.scale.linear().domain([11, maxRate]).range([cHeight, 0]);
                                                                       //
  var g = svg.append("g").attr("transform", "translate(95, 50)");      // 15
                                                                       //
  var circles = g.selectAll("circle").data(data);                      // 17
                                                                       //
  circles.enter().append("circle").attr({                              // 19
    cx: function (d, i) {                                              // 22
      return 49 + i * 22;                                              // 22
    },                                                                 //
    cy: function (d, i) {                                              // 23
      return yScale(d.rate);                                           // 23
    },                                                                 //
    r: 9                                                               // 24
  }).on('mouseover', function (d) {                                    //
    d3.select(this).append("svg:title").text("yesy");                  // 27
    console.log("yup");                                                // 28
  });                                                                  //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
