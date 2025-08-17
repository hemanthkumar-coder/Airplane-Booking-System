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
    console.log(error);
    
    ErrorResponse.error = error;
    res.status(error.StatusCode).json(ErrorResponse);
  }
}

module.exports = {
  createFlight,
  getAllFlights,
};
