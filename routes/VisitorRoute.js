const express = require('express');
const router = express.Router();
const visitors = require('../controllers/VisitorController')

router.route('/').post(visitors.createVisitor)
router.route('/:id').get(visitors.findVisitedPlantesByVisitor)
module.exports = router