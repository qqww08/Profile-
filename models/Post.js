const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
    },
    body: {
      type: String,
    },
    createdAt: { type: Date, default: Date.now }, // 2
    updatedAt: { type: Date },
    views: { type: Number, default: 0 },
    numId: { type: Number },
  }
  // { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };
