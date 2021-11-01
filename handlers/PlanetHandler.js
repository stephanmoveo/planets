const mongoose = require("mongoose");
const makeObjectId = mongoose.Types.ObjectId;
const planetModel = require("../models/PlanetModel");
const solarModel = require("../models/SolarModel");
const {
  createFindPlanetVistiorAgregation,
} = require("./PlanetsAgregations/agregations");

exports.createPlanetHandler = async ({ data }) => {
  const planet = await planetModel.create({
    planetName: data.planetName,
    system: data.system,
    visitors: data.visitors,
  });
  await solarModel.findOneAndUpdate(
    {
      _id: data.system,
    },
    { $push: { planets: planet } }
  );
  return planet;
};

exports.findPlanetVisitorHandler = async (data) => {
  const agregation = createFindPlanetVistiorAgregation(data);
  const response = planetModel.aggregate(agregation);
  return response;
};

exports.findPlanetStarnNameAndVisitorsHandler = async (data) => {
  const response = await planetModel
    .findOne({ _id: data.id })
    .select({ planetName: 1, _id: 0 })
    .populate([
      { path: "visitors", select: "visitorName" },
      { path: "system", select: { starName: 1, _id: 0 } },
    ])
    .exec();
  const { planetName, system, visitors } = response;
  const result = {
    planetName,
    system: system.starName,
    visitors,
  };
  return result;
};
