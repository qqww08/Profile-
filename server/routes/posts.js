const express = require("express");
const router = express.Router();
const { Post } = require("../models/Post");
const { auth } = require("../middleware/auth");

//게시판 리스트
router.get("/", (req, res) => {
  Post.find()
    .populate("writer")
    .exec((err, borderlist) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, borderlist });
    });
});
//게시판 내용
router.post("/info", (req, res) => {
  Post.findOne({ _id: req.body.postId })
    .populate("writer")
    .exec((err, post) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, post });
    });
});

// //게시판 수정
// router.put("/:id", (req, res) => {
//   Post.findByIdAndUpdate(req.params.id, req.body)
//     .then(() => {
//       res.json(req.body);
//     })
//     .catch(err => {
//       res.status(400).send("실패");
//     });
// });
//글쓰기

router.post("/delete", auth, (req, res) => {
  Post.remove({ _id: req.body.postId })
    .populate("writer")
    .exec((err, post) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, post });
    });
});
//게시판 저장
router.post("/", auth, (req, res) => {
  const post = new Post(req.body);
  post.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

module.exports = router;
