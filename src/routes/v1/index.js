const express = require("express");
const { infoController } = require("../../controllers");

const router = express.Router();
const airplaneRoutes = require("./airplane-routes");

router.use("/airplanes", airplaneRoutes);
// router.get("/info", infoController);
module.exports = router;
