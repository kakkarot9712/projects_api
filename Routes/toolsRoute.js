const express = require("express");
const controllers = require("../Controllers/toolsControllers");
const checkPassword = require("../utils/checkPassword");

const router = express.Router();

router.route("/").get(controllers.getTools);
router.route("/new").post(checkPassword, controllers.addTool);
router.route("/:tid").get(controllers.getTool);

module.exports = router;
