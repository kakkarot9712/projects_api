const express = require("express");
const controllers = require("../Controllers/toolsControllers");

const router = express.Router();

router.route("/").get(controllers.getTools);
router.route("/:tid").get(controllers.getTool);

module.exports = router;
