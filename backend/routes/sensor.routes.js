module.exports = app => {
  const sensors = require("../controllers/sensor.controller.js");

  var router = require("express").Router();

  // Retrieve all categories
  router.get("/", sensors.findAll);

};
