const express = require("express");
const controllers = require("../Controllers/projectControllers");
const checkPassword = require("../utils/checkPassword");

const projectRouter = express.Router();

projectRouter.route("/").get(controllers.getAllProjects);
projectRouter.route("/new").post(checkPassword, controllers.addProject);
projectRouter.route("/:pid").get(controllers.getProject);

module.exports = projectRouter;
