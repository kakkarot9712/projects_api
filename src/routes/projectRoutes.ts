import express from "express";
import {
  getAllProjects,
  getProject,
  addProject,
} from "../controllers/projectControllers";
// import authControllers from "../Controllers/authControllers.js";

const projectRouter = express.Router();

projectRouter.route("/").get(getAllProjects);
projectRouter.route("/:pid").get(getProject);

// projectRouter.use(authenticateUser);

// router.use(authControllers.restrictTo("admin"))

// projectRouter.route("/new").post(addProject);

export default projectRouter;
