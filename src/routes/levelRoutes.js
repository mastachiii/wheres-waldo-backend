const express = require("express");
const controller = require("../controller/levelController");

const route = express.Router();

route.get("/", controller.getAllLevels);
route.get("/:id", controller.getLevel);

route.post("/:id", controller.createLevelAttempt);

module.exports = route;
