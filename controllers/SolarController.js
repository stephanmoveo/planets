const solarHandler = require("../handlers/SolarHandler");

exports.createSolar = (req, res) => {
  const data = req.body;
  try {
    solarHandler.createSolarHandler({ data });
    res.json({
      sucsses: true,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.findVisitorSystem = async (req, res) => {
  const data = req.params;
  const response = await solarHandler.findVisitorSystemHandler(data);
  res.json(response);
};
