const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const projectsRouter = require("./Routes/projectRoutes");
const languageRouter = require("./Routes/languagesRoutes");

const app = express();
const port = process.env.PORT;

// Parsing Body
app.use(express.json());

// Morgan
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Connect to Database
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Database is connected!"))
  .catch((err) => console.log(err.message));

// Routes
app.use("/api/v1/projects", projectsRouter);
app.use("/api/v1/languages", languageRouter);

// Global Error Handling
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "fail",
    error: err.message,
  });
});

// Start the server
app.listen(port, () => console.log(`Listening to port ${port}`));
module.exports = app;
