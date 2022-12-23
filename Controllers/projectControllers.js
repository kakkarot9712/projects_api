const Project = require("../Models/projectModel");
const catchAsyncErr = require("../utils/catchAsyncErr");

exports.getAllProjects = catchAsyncErr(async (req, res, next) => {
  const projects = await Project.find();
  res.status(200).json({
    status: "success",
    data: {
      projects,
    },
  });
});

exports.getProject = catchAsyncErr(async (req, res, next) => {
  const id = req.params.pid;
  const project = await Project.findById(id);
  res.status(200).json({
    status: "success",
    data: {
      project,
    },
  });
});

exports.addProject = catchAsyncErr(async (req, res, next) => {
  const {
    project_name,
    project_description,
    project_img_path,
    project_languages,
    project_url,
    project_sourcecode,
  } = req.body;
  const newProject = await Project.create({
    project_name,
    project_description,
    project_img_path,
    project_languages,
    project_url,
    project_sourcecode,
  });
  res.status(201).json({
    status: "success",
    project: newProject,
  });
});
