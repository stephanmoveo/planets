const visitorModel = require("../models/VisitorModel");
const planetModel = require("../models/PlanetModel");

exports.createVisitorHandler = async ({ data }) => {
  const visitor = await visitorModel.create({
    visitorName: data.visitorName,
    homePlanet: data.homePlanet,
    visitedPlanets: data.visitedPlanets,
  });
   data.visitedPlanets.forEach(async (item) => {
    await planetModel.findByIdAndUpdate(
      { _id: item },
      { $push: { visitors: visitor } }
    );
  });
  return visitor;
};
exports.findVisitedPlantesByVisitorHandler = async ({ data }) => {
  const response = await visitorModel
    .findOne({ _id: data.id })
    .populate("visitedPlanets")
    .exec();

  const { visitorName, visitedPlanets } = response;
  const plantetsName = visitedPlanets.map((planet) => ({
    name: planet.planetName,
    _id: planet._id,
  }));
  const result = {
    visitorName,
    visitedPlanets: plantetsName,
  };
  return result;
};
