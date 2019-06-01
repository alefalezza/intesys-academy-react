const appointmentsByDate = require("./appointments-by-date")();
const materials = require("./materials")();

module.exports = () => ({
  appointmentsByDate,
  materials
});
