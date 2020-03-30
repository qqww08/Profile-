const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true
    },
    body: {
      type: String,
      require: true
    },
    poblishedDate: {
      type: Date,
      default: Date.now
    },
    userInfo: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

const Post = mongoose.model("post", postSchema);

module.exports = { Post };
