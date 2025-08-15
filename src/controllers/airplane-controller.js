const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
async function createAirplane(req, res) {
  try {
    const data = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.message = "Successfully Created an Airplane";
    SuccessResponse.data = data;
    res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.StatusCode).json(ErrorResponse);
  }
}
async function getAirplanes(req, res) {
  try {
    const airplanes = await AirplaneService.getAirplanes();
    SuccessResponse.message = "Successfully got all Airplanes";
    SuccessResponse.data = airplanes;
    res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.StatusCode).json(ErrorResponse);
  }
}
async function getAirplane(req, res) {
  try {
    const airplane = await AirplaneService.getAirplane(req.params.id);
    SuccessResponse.message = "Successfully got Airplane";
    SuccessResponse.data = airplane;
    res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.StatusCode).json(ErrorResponse);
  }
}
module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
};
