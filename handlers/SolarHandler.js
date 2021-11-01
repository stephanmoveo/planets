const mongoose = require("mongoose");
const solarModel = require("../models/SolarModel");
const planetModel = require("../models/PlanetModel");
const makeObjectId = mongoose.Types.ObjectId;

exports.createSolarHandler = async ({ data }) => {
  const solar = await solarModel.create({
    planets: data.planets,
    starName: data.starName,
  });
  return solar;
};

exports.findVisitorSystemHandler = async (data) => {
  const systemName = await solarModel.findById({ _id: data.id });
  const response = await planetModel.aggregate([
    { $match: { system: makeObjectId(data.id) } },
    {
      $lookup: {
        from: "visitors",
        localField: "visitors",
        foreignField: "_id",
        as: "solarVisitors",
      },
    },
    {
      $project: {
        solarVisitors: {
          visitedPlanets: 0,
          homePlanet: 0,
          __v: 0,
        },
      },
    },
    { $unwind: "$solarVisitors" },
    {
      $group: {
        _id: null,
        system: { $addToSet: systemName.starName },
        solarVisitors: {
          $addToSet: {
            id: "$solarVisitors._id",
            name: "$solarVisitors.visitorName",
          },
        },
      },
    },
    { $unwind: "$system" },
    {
      $project: {
        _id: 0,
      },
    },
  ]);
  return response;
};
