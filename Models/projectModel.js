const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  project_name: {
    type: String,
    required: [true, "project name is required"],
  },
  project_description: {
    type: String,
    required: [true, "project description is required"],
  },
  project_img_path: {
    type: String,
    required: [true, "project image path is required"],
  },
  project_languages: {
    type: [String],
    required: [true, "project languages are required"],
  },
  project_url: {
    type: String,
    required: [true, "project url is required"],
  },
  project_sourcecode: {
    type: String,
    required: [true, "project sourcecode is required"],
  },
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
