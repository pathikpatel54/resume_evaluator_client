const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/evaluateresume",
        createProxyMiddleware({
            target: "http://localhost:8080",
            changeOrigin: true,
        })
    );

    app.use(
        "/addresume",
        createProxyMiddleware({
            target: "http://localhost:8080",
            changeOrigin: true,
        })
    );
};
