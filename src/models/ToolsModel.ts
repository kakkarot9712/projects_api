import mongoose from "mongoose";

const toolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "tool name is required"],
    unique: [true, "Provided name is already exists in database"],
  },
  svg_gdrive_id: {
    type: String,
    required: [true, "Gdrive ID is requires"],
    unique: [true, "Gdrive Id should be unique"],
  },
});

const Tool = mongoose.model("Tool", toolSchema);

export default Tool;
