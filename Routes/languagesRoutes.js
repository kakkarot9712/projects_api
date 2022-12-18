const express = require("express");
const controllers = require("../Controllers/languageControllers");

const languageRouter = express.Router();

languageRouter.route("/").get(controllers.getAllLanguages);
languageRouter.route("/:lid").get(controllers.getlanguage);

module.exports = languageRouter;
