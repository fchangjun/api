const fs = require("fs");
const path = require("path");
const Router = require("koa-router");
const backendRouter = new Router({ prefix: "backend" });
let dirs = fs.readdirSync(path.join(__dirname, "./"));
dirs.forEach((file) => {
  if (file !== "index.js") {
    let router = require(`./${file}`);
    backendRouter.use(router.routes()).use(router.allowedMethods());
  }
});
module.exports = backendRouter.routes();
