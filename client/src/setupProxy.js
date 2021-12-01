const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/grapql",
    createProxyMiddleware({
      target: "http://swapi:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/grapql": "",
      },
    })
  );
};
