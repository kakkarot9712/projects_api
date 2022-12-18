const Project = require("../Models/projectModel");

exports.getAllProjects = async (req, res, next) => {
  try {
    const projects = await Project.find();
    res.status(200).json({
      status: "success",
      data: {
        projects,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getProject = async (req, res, next) => {
  try {
    const id = req.params.pid;
    const project = await Project.findById(id);
    res.status(200).json({
      status: "success",
      data: {
        project,
      },
    });
  } catch (err) {
    next(err);
  }
};
