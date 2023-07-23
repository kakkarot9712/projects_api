import Project from "../models/projectModel";
import catchAsyncErr from "../utils/catchErrors";

const getAllProjects = catchAsyncErr(async (_, res, __) => {
  const projects = await Project.find();
  res.status(200).json({
    status: "success",
    data: {
      projects,
    },
  });
});

const getProject = catchAsyncErr(async (req, res, _) => {
  const id = req.params.pid;
  const project = await Project.findById(id);
  res.status(200).json({
    status: "success",
    data: {
      project,
    },
  });
});

const addProject = catchAsyncErr(async (req, res, _) => {
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

export { addProject, getAllProjects, getProject };
