const { Post } = require("../models/Post");

let checkLoggedIn = (req, res, next) => {
  const post = new Post(req.body);
  if (!post) {
    return res.status(400);
  }
  return next();
};

module.exports = { checkLoggedIn };
