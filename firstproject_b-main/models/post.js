const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  createDate: {
    type: Date,
  },
  writer: {
    type: String,
    required: true,
    ref: "users",
  },
});

module.exports = mongoose.model("post", postSchema);
