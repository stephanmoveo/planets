const express = require("express");
const dbconnection = require("./dbconnections/dbConnection");

const app = express();

app.use(express.json());

app.use("/addSolar", require("./routes/SolarRoute"));
app.use("/addPlanet", require("./routes/PlanetRoute"));
app.use("/addVisitor", require("./routes/VisitorRoute"));
app.use("/findVisitedPlanets", require("./routes/VisitorRoute"));
app.use("/findPlanetVisitors", require("./routes/PlanetRoute"));
app.use("/findVisitorSystem", require("./routes/SolarRoute"));
app.use("/findPlanetStarnNameAndVisitors", require("./routes/moreRoutes"));

app.listen(process.env.port || 3000, () => {
  dbconnection();
  console.log("Web Server is listening at port " + (process.env.port || 3000));
});
