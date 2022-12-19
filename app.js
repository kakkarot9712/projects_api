const express = require("express");
const mongoose = require("mongoose");

const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const sanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");

const projectsRouter = require("./Routes/projectRoutes");
const languageRouter = require("./Routes/languagesRoutes");
const toolsRouter = require("./Routes/toolsRoute");

const app = express();
const port = process.env.PORT || 7000;

// Morgan
if (process.env.NODE_ENV === "development") {
  const morgan = require("morgan");
  app.use(morgan("dev"));
}

// === Security Middlewares ===

// Configure Request Limits
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many request from IP, try again later",
});

// Add secure Headers
app.use(helmet());

// Fetching Body params with limit for max size
app.use(express.json({ limit: "10kb" }));

// Data Senitization against NoSQL query injection - Query Hijack elimination
app.use(sanitize());

// Data Senitization against XSS - HTML Code Eliminator
app.use(xss());

// Use configured Limiter
app.use("/api", limiter);

// Add secure Headers
app.use(helmet());

// =========== Error handling ==========

// Handling Node Errors
process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
});

process.on("uncaughtException", (err) => {
  console.log(err.message, err.name);
});

// Global Error Handling
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "fail",
    error: err.message,
  });
});

// ============= Setting up api functions =============

// Parsing Body
app.use(express.json());

// Connect to Database
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Database is connected!"))
  .catch((err) => console.log(err.message));

// Setting up CORS policy
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET");
  next();
});

// Routes
app.use("/api/v1/projects", projectsRouter);
app.use("/api/v1/languages", languageRouter);
app.use("/api/v1/tools", toolsRouter);

// Allow Scoped access to file system
app.use(express.static(`${__dirname}/public`));

// Start the server
app.listen(port, () => console.log(`Listening to port ${port}`));
module.exports = app;
