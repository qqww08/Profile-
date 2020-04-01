const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    title: {
      type: String,
      require: true
    },
    body: {
      type: String,
      require: true
    }
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };
