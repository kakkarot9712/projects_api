import express from "express";
import mongoose from "mongoose";
import { rateLimit } from "express-rate-limit";
// import cors from "cors";
import helmet from "helmet";
import { errorHandler } from "./utils/errorHandler";
import { config } from "dotenv";
import projectRouter from "./routes/projectRoutes";
import languageRouter from "./routes/languagesRoutes";
import toolsRouter from "./routes/toolsRoute";

config();

const { DB_URL, NODE_ENV, PORT } = process.env;

const port = PORT || 7000;
const app = express();

// === Security Middlewares ===

// Add secure Headers
app.use(helmet());

// Fetching Body params with limit for max size
app.use(express.json({ limit: "10kb" }));

// Configure Request Limits
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many request from IP, try again later",
});

// // Morgan
// app.use(morgan("dev"));

// Use configured Limiter
app.use("/api", limiter);

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//     // access-control-allow-credentials:true
//     optionsSuccessStatus: 200,
//   })
// );

// Routes
app.use("/projects", projectRouter);
app.use("/languages", languageRouter);
app.use("/tools", toolsRouter);
// app.use("/user", authRouter);

// Global Error Handling
app.use(errorHandler);

// Connect to Database
mongoose.set("strictQuery", false);
mongoose
  .connect(DB_URL!)
  .then(() => {
    console.log("Database is connected!");
    app.listen(port, () => {
      console.log("server is listening to port", port);
    });
  })
  .catch((err) => console.log(err.message));

// Handling Node Errors
process.on("unhandledRejection", (err) => {
  // console.log(err.name, err.message);
  console.log(err);
});

process.on("uncaughtException", (err) => {
  console.log(err);
  // console.log(err.message, err.name);
});
