
var dataArray = [];
var circles = [];

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
  var color = [];
  for (i = 0; i < dataArray.length; i++){
    color.push("#"+((1<<24)*Math.random()|0).toString(16))
  }
  for (i = 0; i < dataArray.length; i++){
      circles.push({
        x: Math.round(Math.random() * (1250 - 40) + 40),
        y: Math.round(Math.random() * (500 - 40) + 40),
        z: 5,
        id: idArray[i],
        color: color[i],
        interests: dataArray[i].Interests
      });
  }
  drawVisualization(circles);
}

function randomizeGroups(){
  var oldCircles = circles;
  d3.selectAll("circle").remove();
  for (let i = circles.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [circles[i], circles[j]] = [circles[j], circles[i]];
  }
  //console.log("id " + circles[56].id + " x: " + circles[56].x);
  for (i = 0; i < circles.length ; i++){
    if (i >= 0 && i < 6) {
      circles[i].x = 62.5;
    }
    else if (i >= 6 && i < 12) {
      circles[i].x = 187.5;
    }
    else if (i >= 12 && i < 18) {
      circles[i].x = 312.5;
    }
    else if (i >= 18 && i < 24) {
      circles[i].x = 437.5;
    }
    else if (i >= 24 && i < 30) {
      circles[i].x = 562.5;
    }
    else if (i >= 30 && i < 36) {
      circles[i].x = 687.5;
    }
    else if (i >= 36 && i < 42) {
      circles[i].x = 812.5;
    }
    else if (i >= 42 && i < 47) {
      circles[i].x = 937.5;
    }
    else if (i >= 47 && i < 52) {
      circles[i].x = 1062.5;
    }
    else if (i >= 52 && i <= 57) {
      circles[i].x = 1187.5;
    }
  }
  for (i = 0; i < circles.length ; i++){
    for (k = 0; i < oldCircles.length ; i++){
      if (circles[i].id === oldCircles[k].id){
        circles[i].z = oldCircles[k].z
      }
    }
  }
  drawVisualization(circles);
}

function groupByInterests(){
  console.log("hello");
  d3.selectAll("circle").remove();
  for (i = 0; i < circles.length ; i++){
    if (circles[i].interests === "Art") {
      circles[i].x = 62.5;
    }
    else if (circles[i].interests === "Football") {
      circles[i].x = 562.5;
    }
    else if (circles[i].interests === "Gaming") {
      circles[i].x = 187.5;
    }
    else if (circles[i].interests === "Graphics") {
      circles[i].x = 312.5;
    }
    else if (circles[i].interests === "Gym") {
      circles[i].x = 1187.5;
    }
    else if (circles[i].interests === "Music") {
      circles[i].x = 437.5;
    }
    else if (circles[i].interests === "Nothing in particular") {
      circles[i].x = 687.5;
    }
    else if (circles[i].interests === "Programming") {
      circles[i].x = 812.5;
    }
    else if (circles[i].interests === "Reading/Travel") {
      circles[i].x = 937.5;
    }
    else if (circles[i].interests === "Sports") {
      circles[i].x = 1062.5;
    }
  }
  drawVisualization(circles);
}

function setFilter(val){
  d3.selectAll("circle").remove();
  updateCircles(dataArray, val, circles);
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
  console.log(idArray);
  for (i = 0; i < circles.length; i++){
    for (k = 0; k < idArray.length; k++){
      if (idArray[k] === circles[i].id){
          circles[i].z = radiusArray[k];
      }
    }
  };
  drawVisualization(circles);
}

function drawVisualization(circles) {
  var svg = d3.select("#canvas"),
      width = +svg.attr("width"),
      height = +svg.attr("height") ;

  circles.sort(function(a, b) {
    return b.z - a.z
  });

  svg.selectAll("circle")
    .data(circles)
    .enter().append("circle")
      .attr("id", function(d) { return d.id })
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; })
      .attr("r", function(d) { return 5*d.z; })
      .style("fill", function(d) { return d.color })
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended))
      .append("title").text(function(d) {return ("Name: " + d.id + "\nInterests: "  + d.interests); })

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
