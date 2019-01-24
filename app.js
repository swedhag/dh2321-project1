function setFilter(val){
  d3.selectAll("circle").remove();
  updateCircles(dataArray, val, circles);
}

var dataArray = [];
var circles = [];
var color = [];

d3.csv("data.csv").then(function(data){
  data.forEach(function(d) {
    d["InformationVisualizationSkills"] = +d["InformationVisualizationSkills"]
    d["StatisticalSkills"] = +d["StatisticalSkills"]
    d["ArtisticSkills"] = +d["ArtisticSkills"];
    d["MathematicsSkills"] = +d["MathematicsSkills"]
    d["ComputerUsageSkills"] = +d["ComputerUsageSkills"]
    d["ProgrammingSkills"] = +d["ProgrammingSkills"]
    d["HCIProgrammingSkills"] = +d["HCIProgrammingSkills"]
    d["UXEvaluationSkills"] = +d["UXEvaluationSkills"]
    d["CommunicationSkills"] = +d["CommunicationSkills"]
    d["CollaborationSkills"] = +d["CollaborationSkills"]
    d["CodeRepositorySkills"] = +d["CodeRepositorySkills"]
    dataArray.push(d);
  })
  createCircles(dataArray);
});


function createCircles (dataArray) {
  var idArray = dataArray.map(a => a.id);
  for (i = 0; i < dataArray.length; i++){
      circles.push({
        x: Math.round(Math.random() * (1250 - 40) + 40),
        y: Math.round(Math.random() * (500 - 40) + 40),
        z: 5,
        id: idArray[i]
      })
  }
  for (i = 0; i < circles.length; i++){
    color.push("#"+((1<<24)*Math.random()|0).toString(16))
  }
  drawVisualization(circles,color);
}

function updateCircles (dataArray, val, circles) {
  var filter = val;
  if (filter === "InformationVisualizationSkills"){
    var radiusArray = dataArray.map(a => a.InformationVisualizationSkills)
    var idArray = dataArray.map(a => a.id)
  }
  if (filter === "StatisticalSkills"){
    var radiusArray = dataArray.map(a => a.StatisticalSkills)
    var idArray = dataArray.map(a => a.id)
  }
  if (filter === "MathematicsSkills"){
    var radiusArray = dataArray.map(a => a.MathematicsSkills)
    var idArray = dataArray.map(a => a.id)
  }
  if (filter === "ArtisticSkills"){
    var radiusArray = dataArray.map(a => a.ArtisticSkills)
    var idArray = dataArray.map(a => a.id)
  }
  if (filter === "ComputerUsageSkills"){
    var radiusArray = dataArray.map(a => a.ComputerUsageSkills)
    var idArray = dataArray.map(a => a.id)
  }
  if (filter === "ProgrammingSkills"){
    var radiusArray = dataArray.map(a => a.ProgrammingSkills)
    var idArray = dataArray.map(a => a.id)
  }
  if (filter === "ComputerGraphicsProgrammingSkills"){
    var radiusArray = dataArray.map(a => a.ComputerGraphicsProgrammingSkills)
    var idArray = dataArray.map(a => a.id)
  }
  if (filter === "HCIProgrammingSkills"){
    var radiusArray = dataArray.map(a => a.HCIProgrammingSkills)
    var idArray = dataArray.map(a => a.id)
  }
  if (filter === "UXEvaluationSkills"){
    var radiusArray = dataArray.map(a => a.UXEvaluationSkills)
    var idArray = dataArray.map(a => a.id)
  }
  if (filter === "CommunicationSkills"){
    var radiusArray = dataArray.map(a => a.CommunicationSkills)
    var idArray = dataArray.map(a => a.id)
  }
  if (filter === "CollaborationSkills"){
    var radiusArray = dataArray.map(a => a.CollaborationSkills)
    var idArray = dataArray.map(a => a.id)
  }
  if (filter === "CodeRepositorySkills"){
    var radiusArray = dataArray.map(a => a.CodeRepositorySkills)
    var idArray = dataArray.map(a => a.id)
  }
  for (i = 0; i < circles.length; i++){
    circles[i].z = radiusArray[i];
  }
  drawVisualization(circles,color);
}

function drawVisualization(circles,color) {
  console.log("id: " + circles[0].id + " x: " + circles[0].x + " y: " + circles[0].y + " z: " + circles[0].z);

  var svg = d3.select("#canvas"),
      width = +svg.attr("width"),
      height = +svg.attr("height") ;

  svg.selectAll("circle")
    .data(circles)
    .enter().append("circle")
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; })
      .attr("r", function(d) { return 5*d.z; })
      .style("fill", function(d, i) { return color[i]; })
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended))
      .append("title").text(function(d) {return d.id; })

  function dragstarted(d) {
    d3.select(this).raise().classed("active", true);
  }

  function dragged(d) {
    d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
  }

  function dragended(d) {
    d3.select(this).classed("active", false);
  }
}
