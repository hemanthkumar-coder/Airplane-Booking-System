const express = require("express");
const { infoController } = require("../../controllers");

const router = express.Router();
const airplaneRoutes = require("./airplane-routes");
const cityRoutes = require("./city-routes");
const airportRoutes = require("./airport-routes");
const flightsRouter = require("./flight-routes");
router.use("/airplanes", airplaneRoutes);
router.use("/cities", cityRoutes);
router.use("/airports", airportRoutes);
router.use("/flights", flightsRouter);
// router.get("/info", infoController);
module.exports = router;
