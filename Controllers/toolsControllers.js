const Tool = require("../Models/ToolsModel");

exports.getTools = async (req, res, next) => {
  try {
    const tools = await Tool.find();
    res.status(200).json({
      status: "success",
      data: {
        tools,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getTool = async (req, res, next) => {
  try {
    const id = req.params.tid;
    const tool = await Tool.findById(id);
    res.status(200).json({
      status: "success",
      data: {
        tool,
      },
    });
  } catch (err) {
    next(err);
  }
};
