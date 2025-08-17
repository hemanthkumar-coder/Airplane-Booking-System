const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const { AppError } = require("../utils");

function validateCreateRequest(req, res, next) {
  if (!req.body.name) {
    ErrorResponse.message = "Something Went wrong in create request";
    ErrorResponse.error = new AppError(
      ["name not found in incoming request"],
      StatusCodes.INTERNAL_SERVER_ERROR
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.code) {
    ErrorResponse.message = "Something Went wrong in create request";
    ErrorResponse.error = new AppError(
      ["code not found in incoming request"],
      StatusCodes.INTERNAL_SERVER_ERROR
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.city_id) {
    ErrorResponse.message = "Something Went wrong in create request";
    ErrorResponse.error = new AppError(
      ["city_id not found in incoming request"],
      StatusCodes.INTERNAL_SERVER_ERROR
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = { validateCreateRequest };
