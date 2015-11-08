 d3.json("data.json", function(err, info) {
  var svg = d3.select("#povertyChart");

  var data = info.povertyRates;
  console.log(data);

  var cHeight = 500;

  var maxRate = d3.max(data, function(d) { return d.rate } );

  var yScale = d3.scale.linear()
    .domain([11, maxRate])
    .range([cHeight, 0])

  var g = svg.append("g").attr("transform", "translate(95, 50)");

  var circles = g.selectAll("circle").data(data);

  circles.enter()
  .append("circle")
  .attr({
    cx:function(d,i){return 49 + i * 22},
    cy:function(d,i){return yScale(d.rate)},
    r:9
  })
  .on('mouseover', function(d) {
    d3.select(this).append("svg:title").text("yesy")
    console.log("yup")
  });
});