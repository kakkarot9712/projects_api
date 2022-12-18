const express = require("express");
const controllers = require("../Controllers/projectControllers");

const projectRouter = express.Router();

projectRouter.route("/").get(controllers.getAllProjects);
projectRouter.route("/:pid").get(controllers.getProject);

module.exports = projectRouter;
