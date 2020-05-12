const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target:
        "http://ec2-13-125-131-15.ap-northeast-2.compute.amazonaws.com:5000",
      changeOrigin: true,
    })
  );
};
