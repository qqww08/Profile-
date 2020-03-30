const { Face } = require("../models/Face");

let fbauth = (req, res, next) => {
  //인증 처리를 하는곳
  //클라이언트 쿠키에서 토큰을 가져온다.
  let token = req.cookies.y_auth;
  // 토큰을 복호화 한후  유저를 찾는다.
  Face.findByToken(token, (err, face) => {
    if (err) throw err;
    if (!face) return res.json({ isAuth: false, error: true });
    // console.log('userh', user)
    req.token = token;
    req.face = face;
    next();
  });
};

module.exports = { fbauth };
