// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");

// const faceSchema = mongoose.Schema({
//   name: {
//     type: String,
//     maxlength: 50
//   },
//   email: {
//     type: String,
//     trim: true,
//     unique: 1
//   },
//   password: {
//     type: String,
//     minlength: 5
//   },
//   token: {
//     type: String
//   },
//   user_id: {
//     type: String
//   },
//   userID: {
//     type: String
//   },
//   picture: String
// });

// faceSchema.methods.generateToken = function(cb) {
//   var face = this;
//   // console.log('user._id', user._id)

//   // jsonwebtoken을 이용해서 token을 생성하기
//   var fbtoken = jwt.sign(face._id.toHexString(), "secretToken");
//   // user._id + 'secretToken' = token
//   // ->
//   // 'secretToken' -> user._id
//   face.fbtoken = fbtoken;
//   face.save(function(err, face) {
//     if (err) return cb(err);
//     cb(null, face);
//   });
// };

// faceSchema.statics.findByToken = function(token, cb) {
//   var face = this;
//   // user._id + ''  = token
//   //토큰을 decode 한다.
//   jwt.verify(token, "secretToken", function(err, decoded) {
//     //유저 아이디를 이용해서 유저를 찾은 다음에
//     //클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인
//     face.findOne({ _id: decoded, token: token }, function(err, face) {
//       if (err) return cb(err);
//       cb(null, face);
//     });
//   });
// };
// const Face = mongoose.model("Face", faceSchema);

// module.exports = { Face };
