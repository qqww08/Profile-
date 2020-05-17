const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { User } = require("../models/User");
const { auth } = require("../middleware/auth");
const multer = require("multer");

//회원가입
router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (user) {
      return res.json({
        success: false,
      });
    } else {
      const user = new User(req.body);
      user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
          success: true,
          userInfo,
        });
      });
    }
  });
});
//소셜 회원가입,로그인
router.post("/gregister", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (user) {
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({
          success: true,
          userId: user._id,
          user,
          token: user.token,
          stoken: req.body.stoken,
        });
      });
    } else {
      const user = new User(req.body);
      user.save((err, userInfo) => {
        if (err) return res.json({ register: false, err });
        return res.status(200).json({
          register: true,
        });
      });
    }
  });
});
//회원 로그인
router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    // console.log('user', user)
    if (!user) {
      return res.json({
        success: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다.",
      });
    }
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          success: false,
          message: "비밀번호가 틀렸습니다.",
        });
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({ success: true, token: user.token });
      });
    });
  });
});
//인증
router.get("/auth", auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    image: req.user.image,
    stoken: req.user.stoken,
  });
});
//로그아웃
router.get("/logout", auth, (req, res) => {
  // console.log('req.user', req.user)
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({
      success: true,
    });
  });
});
//이미지 업로드
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

var upload = multer({ storage: storage }).single("file");

router.post("/image", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return req.json({ success: false, err });
    }
    return res.json({
      success: true,
      filePath: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});
//회원정보 수정
router.post("/useredit", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    // console.log('user', user)
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          success: false,
        });

      if (req.body.chpassword) {
        bcrypt.genSalt(saltRounds, function (err, salt) {
          bcrypt.hash(req.body.chpassword, salt, function (err, hash) {
            if (err) return next(err);
            req.body.chpassword = hash;

            User.findByIdAndUpdate(
              { _id: req.body._id },
              {
                image: req.body.image,
                password: req.body.chpassword,
              },
              { new: true },
              (err, userInfo) => {
                if (err)
                  return res.json({ success: false, message: "비밀번호" });
                return res.status(200).json({
                  success: true,
                  userInfo,
                });
              }
            );
          });
        });
      }
    });
  });
});

module.exports = router;
