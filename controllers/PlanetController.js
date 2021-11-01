const planetModel = require("../handlers/PlanetHandler");

exports.createPlanet = async (req, res) => {
  const data = req.body;
  try {
    await planetModel.createPlanetHandler({ data });
    res.json({
      sucsses: true,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.findPlanetVisitor = async (req, res) => {
  const data = req.params;
  const response = await planetModel.findPlanetVisitorHandler(data);
  res.json(response);
};

exports.findPlanetStarnNameAndVisitors = async (req, res) => {
  const data = req.params;
  const response = await planetModel.findPlanetStarnNameAndVisitorsHandler(data);
  res.json(response);
};
