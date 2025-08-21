const CrudRepository = require("./crud-repository");
const { Flight, Airport, City } = require("../models");
const { Sequelize } = require("sequelize");
const db = require("../models");
const { addLockOnFlightRow } = require("./queries");
const { AppError } = require("../utils");
const { StatusCodes } = require("http-status-codes");
class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }
  async getAllFlights(filter, sortFilter) {
    const response = await Flight.findAll({
      where: filter,
      order: sortFilter,
      include: [
        {
          model: Airport,
          as: "departureAirportDetails",
          requried: true,
          on: {
            col1: Sequelize.where(
              Sequelize.col("Flight.departureAirportId"),
              "=",
              Sequelize.col("departureAirportDetails.code")
            ),
          },
          include: {
            model: City,
            required: true,
          },
        },
        {
          model: Airport,
          as: "arrivalAirportDetails",
          requried: true,
          on: {
            col1: Sequelize.where(
              Sequelize.col("Flight.arrivalAirportId"),
              "=",
              Sequelize.col("arrivalAirportDetails.code")
            ),
          },
          include: {
            model: City,
            required: true,
          },
        },
      ],
    });
    return response;
  }
  async updateFlightBySeats(flightId, seats, dec = true) {
    const flight = await Flight.findByPk(flightId);
    if (!flight) {
      throw new AppError(
        "The Flight you requested is not found",
        StatusCodes.NOT_FOUND
      );
    }
    if (dec) {
      await flight.decrement("totalSeats", { by: seats });
    } else {
      await flight.increment("totalSeats", { by: seats });
    }
    const updatedFlight = await Flight.findByPk(flightId);
    return updatedFlight;
  }
}

module.exports = FlightRepository;
