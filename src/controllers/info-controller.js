const { StatusCodes } = require("http-status-codes");

const infoController = async (req, res) => {
  try {
    res.status(200).json({
      message: "Welcome to the Airplane Booking Platform API",
      version: "1.0.0",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = { infoController };
