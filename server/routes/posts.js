const express = require("express");
const router = express.Router();
const { checkLoggedIn } = require("../middleware/checkLoggedIn");
const { Post } = require("../models/Post");

router.post("/wr", checkLoggedIn, (req, res) => {
  //회원 가입 할떄 필요한 정보들을  client에서 가져오면
  //그것들을  데이터 베이스에 넣어준다.
  const post = new Post(req.body);
  post.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true
    });
  });
});

module.exports = router;
