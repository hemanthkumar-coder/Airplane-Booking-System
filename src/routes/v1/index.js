const express = require("express");
const { infoController } = require("../../controllers");

const router = express.Router();
const airplaneRoutes = require("./airplane-routes");
const cityRoutes = require("./city-routes");

router.use("/airplanes", airplaneRoutes);
router.use("/cities", cityRoutes);
// router.get("/info", infoController);
module.exports = router;
