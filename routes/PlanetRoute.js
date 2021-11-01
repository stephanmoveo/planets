const express = require("express");
const router = express.Router();
const planet = require("../controllers/PlanetController");

router.route("/").post(planet.createPlanet);
router.route("/:id").get(planet.findPlanetVisitor);
module.exports = router;
