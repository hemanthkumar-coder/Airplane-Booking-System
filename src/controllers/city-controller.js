const { StatusCodes } = require("http-status-codes");
const { CityService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
async function createCity(req, res) {
  try {
    const data = await CityService.createCity({
      name: req.body.name,
    });
    SuccessResponse.message = "Successfully Created a City";
    SuccessResponse.data = data;
    res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.StatusCode).json(ErrorResponse);
  }
}
async function getCities(req, res) {
  try {
    const cities = await CityService.getCities();
    SuccessResponse.message = "Successfully got all Cities";
    SuccessResponse.data = cities;
    res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.StatusCode).json(ErrorResponse);
  }
}
async function getCity(req, res) {
  try {
    const city = await CityService.getCity(req.params.id);
    SuccessResponse.message = "Successfully got City";
    SuccessResponse.data = city;
    res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.StatusCode).json(ErrorResponse);
  }
}

async function destroyCity(req, res) {
  try {
    const data = await CityService.destroyCity(req.params.id);
    SuccessResponse.message = "Successfully Destroyed City";
    SuccessResponse.data = data;
    res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.StatusCode).json(ErrorResponse);
  }
}
async function updateCity(req, res) {
  try {
    const city = await CityService.updateCity(req.body, req.params.id);
    SuccessResponse.message = "Successfully Updated Airplane";
    SuccessResponse.data = city;
    res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.StatusCode).json(ErrorResponse);
  }
}
module.exports = {
  createCity,
  getCities,
  getCity,
  destroyCity,
  updateCity,
};
