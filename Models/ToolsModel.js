const mongoose = require("mongoose");

const toolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "tool name is required"],
  },
});

const Tool = mongoose.model("Tool", toolSchema);

module.exports = Tool;