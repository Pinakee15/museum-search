const router = require("express").Router();
const controller = require("../controller/app.controller").controller

// Get Museum-visitors record 
router.get("/visitors", controller.getMuseumsVisitorsCount )

module.exports = router;