const { Logger } = require("../config");
const { AirplaneRepository } = require("../repositories");
const { AppError } = require("../utils");
const { StatusCodes } = require("http-status-codes");
const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    Logger.error("Something Went Wrong in Airplane-Service:Create");
    if (error.name === "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot Create new Airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplanes() {
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    throw new AppError(
      "Cannot fetch data of the airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function getAirplane(id) {
  try {
    const airplane = await airplaneRepository.get(id);
    return airplane;
  } catch (error) {
    if (error.StatusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "Airplane you Requested is Not found",
        error.StatusCode
      );
    }
    throw new AppError(
      "Cannot fetch data of the airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function destroyAirplane(id) {
  try {
    const airplane = await airplaneRepository.delete(id);
    return airplane;
  } catch (error) {
    if (error.StatusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "Airplane you want to delete is Not found",
        error.StatusCode
      );
    }
    throw new AppError(
      "Cannot fetch data of the airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function updateAirplane(data, id) {
  try {
    const airplane = await airplaneRepository.update(data, id);
    return airplane;
  } catch (error) {
    if (error.StatusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "Airplane you Requested to Update is Not found",
        error.StatusCode
      );
    }
    throw new AppError(
      "Cannot fetch data of the airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
  updateAirplane,
};
