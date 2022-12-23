const Tool = require("../Models/ToolsModel");
const catchAsyncErr = require("../utils/catchAsyncErr");

exports.getTools = catchAsyncErr(async (req, res, next) => {
  const tools = await Tool.find();
  res.status(200).json({
    status: "success",
    data: {
      tools,
    },
  });
});

exports.getTool = catchAsyncErr(async (req, res, next) => {
  const id = req.params.tid;
  const tool = await Tool.findById(id);
  res.status(200).json({
    status: "success",
    data: {
      tool,
    },
  });
});

exports.addTool = catchAsyncErr(async (req, res, next) => {
  const tool = await Tool.create({ name: req.body.name });
  res.status(201).json({
    status: "success",
    tool,
  });
});
