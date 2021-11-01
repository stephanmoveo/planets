const express = require("express");
const router = express.Router();
const planet = require("../controllers/PlanetController");

router.route("/:id").get(planet.findPlanetStarnNameAndVisitors);
module.exports = router;
