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
  const responseTo = req.body.responseTo;
  if (responseTo) {
    Comment.remove({ _id: req.body.responseTo })
      .populate("writer")
      .exec((err, result) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({ repost: true });
      });
  } else {
    Comment.remove({ _id: req.body.postId }).exec((err, result) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ post: true });
    });
  }
});

//댓글 수정
router.put("/edit", (req, res) => {
  Comment.findByIdAndUpdate(
    { _id: req.body.postId },
    { content: req.body.content },
    { new: true },
    (err, result) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, result });
    }
  );
});
module.exports = router;
