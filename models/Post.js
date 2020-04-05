const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Counter = require("./Counter");

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
    views: { type: Number, default: 0 },
    numId: { type: Number },
  },
  { timestamps: true }
);

// postSchema.pre("save", function (next) {
//   var post = this;
//   if (post.isNew) {
//     counter = Counter.findOne({ name: "posts" }).exec();
//     if (!counter) counter = Counter.create({ name: "posts" });
//     counter.count++;
//     counter.save();
//     post.numId = counter.count;
//   }
//   return next();
// });

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };
