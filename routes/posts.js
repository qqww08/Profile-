const express = require("express");
const router = express.Router();
const { Post } = require("../models/Post");
const { auth } = require("../middleware/auth");

//게시판 리스트
router.get("/", (req, res) => {
  Post.find()
    .populate("writer")
    .sort("-createdAt")
    .exec((err, borderlist) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, borderlist });
    });
});
//모바일 게시판 리스트
router.post("/mborder", (req, res) => {
  let limit = req.body.limit ? parseInt(req.body.limit) : 20;
  let skip = req.body.skip ? parseInt(req.body.skip) : 0;

  Post.find()

    .populate("writer")
    .limit(limit)
    .skip(skip)
    .sort("-createdAt")
    .exec((err, mborderlist) => {
      if (err) return res.status(400).send(err);
      res
        .status(200)
        .json({ success: true, mborderlist, postSize: mborderlist.length });
    });
});
//검색
router.post("/search", (req, res) => {
  const term = req.body.searchTerm;

  Post.find()
    .find({ title: { $regex: term } })
    .populate("writer")
    .sort("-createdAt")
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

//게시판 수정
router.put("/edit", auth, (req, res) => {
  Post.findByIdAndUpdate(
    { _id: req.body.postId },
    { title: req.body.title, body: req.body.body },

    (err, post) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, post });
    }
  );
});

// 삭제
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
    Post.find({ _id: post._id })
      .populate("writer")
      .exec((err, result) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({ success: true, result });
      });
  });
});

module.exports = router;
