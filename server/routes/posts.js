const express = require("express");
const router = express.Router();
const { Post } = require("../models/Post");

router.post("/wr", (req, res) => {
  const post = new Post(req.body);

  post.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true
    });
  });
});

router.get("/getWr", (req, res) => {
  Post.find()
    .populate("writer")
    .exec((err, posts) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, posts });
    });
});

router.post("/wrDetail", (req, res) => {
  Post.find({ email: req.email })
    .populate("writer")
    .exec((err, postsOpen) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, postsOpen });
    });
});

module.exports = router;
