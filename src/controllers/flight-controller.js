const { StatusCodes } = require("http-status-codes");
const { FlightService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/*
Create Flight Contoller:-
req.body{
    flightNumber:"UK30"
    airplaneId:1
    departureAirportId:"BLR"
    arrivalAirportId:"MUM"
    arrivalTime:"2025:08:20 08:30:00"
    departureTime:"2025:08:19 06:30:00"
    price:"2000"
    boardingGate:""
    totalSeats:100
}
*/

async function createFlight(req, res) {
  try {
    const data = await FlightService.createFlight({
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
      boardingGate: req.body.boardingGate,
      totalSeats: req.body.totalSeats,
    });
    SuccessResponse.message = "Successfully Created a Flight";
    SuccessResponse.data = data;
    res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.StatusCode).json(ErrorResponse);
  }
}

/*
req.query={
  trips:"BLR-MUM"
}
 */
async function getAllFlights(req, res) {
  try {
    const flights = await FlightService.getAllFlights(req.query);
    SuccessResponse.message = "Successfully Retrieved Flight Details";
    SuccessResponse.data = flights;
    res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.StatusCode).json(ErrorResponse);
  }
}

async function getFlight(req, res) {
  try {
    const flight = await FlightService.getFlight(req.params.id);
    SuccessResponse.message = "Successfully Found the Flight you Requested";
    SuccessResponse.data = flight;
    res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.StatusCode).json(ErrorResponse);
  }
}

async function updateSeatsOfFlight(req, res) {
  try {
    const flight = await FlightService.updateFlightBySeats({
      flightId: req.params.id,
      seats: req.body.seats,
      dec: req.body.dec,
    });
    SuccessResponse.message =
      "Successfully Updated the Seats of the flight and Returned Updated Flight Details";
    SuccessResponse.data = flight;
    res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

module.exports = {
  createFlight,
  getAllFlights,
  getFlight,
  updateSeatsOfFlight,
};
