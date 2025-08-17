const { Logger } = require("../config");
const { AirportRespository } = require("../repositories");
const { AppError } = require("../utils");
const { StatusCodes } = require("http-status-codes");
const airportRepository = new AirportRespository();

async function createAirport(data) {
  try {
    const airport = await airportRepository.create(data);
    return airport;
  } catch (error) {
    Logger.error("Something Went Wrong in Airport-Service:Create");
    if (error.name === "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot Create new Airport",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirports() {
  try {
    const airports = await airportRepository.getAll();
    if (!airports) {
      throw new AppError("No Airports Found", StatusCodes.NOT_FOUND);
    }
    return airports;
  } catch (error) {
    throw new AppError(
      "Cannot fetch data of the airports",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function getAirport(id) {
  try {
    const airport = await airportRepository.get(id);
    return airport;
  } catch (error) {
    if (error.StatusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "Airport you Requested is Not found",
        error.StatusCode
      );
    }
    throw new AppError(
      "Cannot fetch data of the airport",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function destroyAirport(id) {
  try {
    const airport = await airportRepository.delete(id);
    return airport;
  } catch (error) {
    if (error.StatusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "Airport you want to delete is Not found",
        error.StatusCode
      );
    }
    throw new AppError(
      "Cannot fetch data of the airport",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function updateAirport(data, id) {
  try {
    const airport = await airportRepository.update(data, id);
    return airport;
  } catch (error) {
    if (error.StatusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "Airport you Requested to Update is Not found",
        error.StatusCode
      );
    }
    throw new AppError(
      "Cannot fetch data of the airport",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
module.exports = {
  createAirport,
  getAirports,
  getAirport,
  destroyAirport,
  updateAirport,
};
