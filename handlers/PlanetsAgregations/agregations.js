const mongoose = require("mongoose");
const makeObjectId = mongoose.Types.ObjectId;

exports.createFindPlanetVistiorAgregation = (data) => {
  return [
    { $match: { _id: makeObjectId(data.id) } },
    {
      $lookup: {
        from: "visitors",
        localField: "visitors",
        foreignField: "_id",
        as: "visitorsOnPlanet",
      },
    },
    {
      $project: {
        _id: 0,
        system: 0,
        visitors: 0,
        __v: 0,
        visitorsOnPlanet: {
          visitedPlanets: 0,
          homePlanet: 0,
          __v: 0,
        },
      },
    },
  ];
};
