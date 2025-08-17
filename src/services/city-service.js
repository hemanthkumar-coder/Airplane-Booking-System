const { Logger } = require("../config");
const { CityRepository } = require("../repositories");
const { AppError } = require("../utils");
const { StatusCodes } = require("http-status-codes");
const cityRepository = new CityRepository();

async function createCity(data) {
  try {
    const city = await cityRepository.create(data);
    return city;
  } catch (error) {
    Logger.error("Something Went Wrong in City-Service:Create");
    if (
      error.name === "SequelizeValidationError" ||
      error.name === "SequelizeUniqueConstraintError"
    ) {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot Create new City",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getCities() {
  try {
    const cities = await cityRepository.getAll();
    return cities;
  } catch (error) {
    throw new AppError(
      "Cannot fetch data of the cities",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function getCity(id) {
  try {
    const city = await cityRepository.get(id);
    return city;
  } catch (error) {
    if (error.StatusCode === StatusCodes.NOT_FOUND) {
      throw new AppError("City you Requested is Not found", error.StatusCode);
    }
    throw new AppError(
      "Cannot fetch data of the city",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function destroyCity(id) {
  try {
    const city = await cityRepository.delete(id);
    return city;
  } catch (error) {
    if (error.StatusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "City you want to delete is Not found",
        error.StatusCode
      );
    }
    throw new AppError(
      "Cannot delete  the city",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function updateCity(data, id) {
  try {
    const city = await cityRepository.update(data, id);
    return city;
  } catch (error) {
    if (error.StatusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        "City you Requested to Update is Not found",
        error.StatusCode
      );
    }
    throw new AppError(
      "Cannot update data of the city",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
module.exports = {
  createCity,
  getCities,
  getCity,
  destroyCity,
  updateCity,
};
