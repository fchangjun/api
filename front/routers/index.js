const fs = require("fs");
const path = require("path");
const Router = require("koa-router");
const frontRouter = new Router({ prefix: "front" });
let dirs = fs.readdirSync(path.join(__dirname, "./"));
dirs.forEach((file) => {
  if (file !== "index.js") {
    let router = require(`./${file}`);
    frontRouter.use(router.routes()).use(router.allowedMethods());
  }
});
module.exports = frontRouter.routes();
