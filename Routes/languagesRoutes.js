const express = require("express");
const controllers = require("../Controllers/languageControllers");
const checkPassword = require("../utils/checkPassword");

const languageRouter = express.Router();

languageRouter.route("/").get(controllers.getAllLanguages);
languageRouter.route("/new").post(checkPassword, controllers.addLanguage);
languageRouter.route("/:lid").get(controllers.getlanguage);

module.exports = languageRouter;
