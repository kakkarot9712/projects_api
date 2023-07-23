import express from "express";
import {
  getAllLanguages,
  getlanguage,
  addLanguage,
} from "../controllers/languageControllers";
// import authControllers from "../controllers/authControllers.js";

const languageRouter = express.Router();

languageRouter.route("/").get(getAllLanguages);
languageRouter.route("/:lid").get(getlanguage);

// languageRouter.use(addLanguage);

// router.use(authControllers.restrictTo("admin"))

// languageRouter.route("/new").post(addLanguage);

export default languageRouter;
