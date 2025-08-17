const { StatusCodes } = require("http-status-codes");
const { AirportService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
async function createAirport(req, res) {
  try {
    const data = await AirportService.createAirport({
      name: req.body.name,
      code: req.body.code,
      city_id: req.body.city_id,
    });
    SuccessResponse.message = "Successfully Created an Airport";
    SuccessResponse.data = data;
    res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.StatusCode).json(ErrorResponse);
  }
}
async function getAirports(req, res) {
  try {
    const aiports = await AirportService.getAirports();
    SuccessResponse.message = "Successfully got all Airports";
    SuccessResponse.data = aiports;
    res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.StatusCode).json(ErrorResponse);
  }
}
async function getAirport(req, res) {
  try {
    const airport = await AirportService.getAirport(req.params.id);
    SuccessResponse.message = "Successfully got Airport";
    SuccessResponse.data = airport;
    res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.StatusCode).json(ErrorResponse);
  }
}

async function destroyAirport(req, res) {
  try {
    const data = await AirportService.destroyAirport(req.params.id);
    SuccessResponse.message = "Successfully Destroyed Airports";
    SuccessResponse.data = data;
    res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.StatusCode).json(ErrorResponse);
  }
}
async function updateAirport(req, res) {
  try {
    const airport = await AirportService.updateAirport(req.body, req.params.id);
    SuccessResponse.message = "Successfully Updated Airplane";
    SuccessResponse.data = airport;
    res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.StatusCode).json(ErrorResponse);
  }
}
module.exports = {
  createAirport,
  getAirports,
  getAirport,
  destroyAirport,
  updateAirport,
};
