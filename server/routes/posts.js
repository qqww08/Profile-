const express = require("express");
const router = express.Router();
const { checkLoggedIn } = require("../middleware/checkLoggedIn");
const { Post } = require("../models/Post");

router.post("/wr", checkLoggedIn, (req, res) => {
  const post = new Post(req.body);
  post.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true
    });
  });
});

module.exports = router;
