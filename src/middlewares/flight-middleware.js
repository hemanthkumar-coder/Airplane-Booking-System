const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const { AppError } = require("../utils");
const { compareDateTime } = require("../utils/helpers/datetime-helper");

function validateCreateRequest(req, res, next) {
  if (!req.body.flightNumber) {
    ErrorResponse.message = "Something Went wrong in create request";
    ErrorResponse.error = new AppError(
      ["flightNumber not found in incoming request"],
      StatusCodes.INTERNAL_SERVER_ERROR
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.airplaneId) {
    ErrorResponse.message = "Something Went wrong in create request";
    ErrorResponse.error = new AppError(
      ["airplaneId not found in incoming request"],
      StatusCodes.INTERNAL_SERVER_ERROR
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.departureAirportId) {
    ErrorResponse.message = "Something Went wrong in create request";
    ErrorResponse.error = new AppError(
      ["departureAirportId not found in incoming request"],
      StatusCodes.INTERNAL_SERVER_ERROR
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.arrivalAirportId) {
    ErrorResponse.message = "Something Went wrong in create request";
    ErrorResponse.error = new AppError(
      ["arrivalAirportId not found in incoming request"],
      StatusCodes.INTERNAL_SERVER_ERROR
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.arrivalTime) {
    ErrorResponse.message = "Something Went wrong in create request";
    ErrorResponse.error = new AppError(
      ["arrivalTime not found in incoming request"],
      StatusCodes.INTERNAL_SERVER_ERROR
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.departureTime) {
    ErrorResponse.message = "Something Went wrong in create request";
    ErrorResponse.error = new AppError(
      ["departureTime not found in incoming request"],
      StatusCodes.INTERNAL_SERVER_ERROR
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.price) {
    ErrorResponse.message = "Something Went wrong in create request";
    ErrorResponse.error = new AppError(
      ["price not found in incoming request"],
      StatusCodes.INTERNAL_SERVER_ERROR
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.totalSeats) {
    ErrorResponse.message = "Something Went wrong in create request";
    ErrorResponse.error = new AppError(
      ["totalSeats not found in incoming request"],
      StatusCodes.INTERNAL_SERVER_ERROR
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!compareDateTime(req.body.arrivalTime, req.body.departureTime)) {
    ErrorResponse.message = "Something Went wrong in create request";
    ErrorResponse.error = new AppError(
      ["departureTime must be less than arrivalTime"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = { validateCreateRequest };
