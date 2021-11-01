const visitorHandler = require("../handlers/VisitorHandler");

exports.createVisitor = async (req, res) => {
  const data = req.body;
  try {
    const response = await visitorHandler.createVisitorHandler({ data });
    res.json({ sucsses: true, response: response });
  } catch (err) {
    res.json(err);
  }
};

exports.findVisitedPlantesByVisitor = async (req, res) => {
  const data = req.params;
  try {
    const result = await visitorHandler.findVisitedPlantesByVisitorHandler({ data });
    res.json(result);
  } catch (err) {
    res.json(err);
  }
};
