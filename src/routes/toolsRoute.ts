import express from "express";
import { getTool, getTools, addTool } from "../controllers/toolsControllers";
// import authControllers from "../controllers/authControllers.js";

const router = express.Router();

router.route("/").get(getTools);
router.route("/:tid").get(getTool);

// router.use(authenticateUser);
// router.route("/new").post(addTool);

export default router;
