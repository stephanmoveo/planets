const express = require('express');
const router = express.Router();
const solarController = require('../controllers/SolarController')

router.route('/').post(solarController.createSolar)
router.route("/:id").get(solarController.findVisitorSystem);

module.exports = router