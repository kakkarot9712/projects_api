import mongoose from "mongoose";

const toolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "tool name is required"],
    unique: [true, "Provided name is already exists in database"],
  },
});

const Tool = mongoose.model("Tool", toolSchema);

export default Tool;
