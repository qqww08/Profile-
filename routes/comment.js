const express = require("express");
const router = express.Router();
const { Comment } = require("../models/Comment");
const { auth } = require("../middleware/auth");

router.post("/saveComment", (req, res) => {
  const comment = new Comment(req.body);

  comment.save((err, comment) => {
    if (err) return res.json({ success: false, err });

    Comment.find({ _id: comment._id })
      .populate("writer")
      .exec((err, result) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({ success: true, result });
      });
  });
});

router.post("/getComment", (req, res) => {
  Comment.find({ postId: req.body.postId })
    .populate("writer")
    .exec((err, comments) => {
      if (err) return res.json({ success: false, err });
      return res.json({ success: true, comments });
    });
});
// 댓글 삭제
router.post("/delete", (req, res) => {
  Comment.remove({ _id: req.body.postId })
    .populate("writer")
    .exec((err, result) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, result });
    });
});
module.exports = router;
