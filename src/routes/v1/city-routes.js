const express = require("express");
const { CityController } = require("../../controllers");
const { CityMiddleware } = require("../../middlewares");

const router = express.Router();

// /api/v1/airplanes
router.post(
  "/",
  CityMiddleware.validateCreateRequest,
  CityController.createCity
);
//api/v1/airplanes/GET
router.get("/", CityController.getCities);
//api/v1/airplanes/:id/GET
router.get("/:id", CityController.getCity);
//api/v1/airplanes/:id DELETE
router.delete("/:id", CityController.destroyCity);
//api/v1/airplanes/:id PATCH
router.patch("/:id", CityController.updateCity);
module.exports = router;
