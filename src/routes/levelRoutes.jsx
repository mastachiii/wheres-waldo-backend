const express = require("express");

const route = express.Router();

route.get("/", controller.getAllLevels);
route.get("/:id", controller.getLevel);

module.exports = route;
