var svg = d3
  .select(".progress")
  .append("svg")
  .attr("height", 20)
  .attr("width", 500);

var states = ["started", "inProgress", "completed"];
var segmentWidth = 100;

svg
  .append("rect")
  .attr("class", "bg-rect")
  .attr("rx", 10)
  .attr("ry", 10)
  .attr("fill", "rgba(0,0,0,.54)")
  .attr("height", 15)
  .attr("width", function() {
    return 500;
  })
  .attr("x", 0);

var progress = svg
  .append("rect")
  .attr("class", "progress-rect")
  .attr("fill", "#18ffff")
  .attr("height", 15)
  .attr("width", 0)
  .attr("rx", 10)
  .attr("ry", 10)
  .attr("x", 0);

window.setInterval(function() {
  progress
    .transition()
    .duration(1000)
    .attr("width", function() {
      var sofar = distance;
      var trip = 58000000;
      return (sofar / trip) * 500;
    });
}, 1000);
