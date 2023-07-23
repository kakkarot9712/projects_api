import Tool from "../models/ToolsModel";
import catchAsyncErr from "../utils/catchErrors";

const getTools = catchAsyncErr(async (_, res, __) => {
  const tools = await Tool.find();
  res.status(200).json({
    status: "success",
    data: {
      tools,
    },
  });
});

const getTool = catchAsyncErr(async (req, res, _) => {
  const id = req.params.tid;
  const tool = await Tool.findById(id);
  res.status(200).json({
    status: "success",
    data: {
      tool,
    },
  });
});

const addTool = catchAsyncErr(async (req, res, _) => {
  const tool = await Tool.create({ name: req.body.name });
  res.status(201).json({
    status: "success",
    tool,
  });
});

export { getTool, getTools, addTool };
