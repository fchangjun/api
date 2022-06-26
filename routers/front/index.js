const fs = require("fs");
const path = require("path");
const Router = require("koa-router");
const router = new Router({ prefix: "/front"});
let dirs = fs.readdirSync(path.join(__dirname, "./"));
dirs.forEach((file) => {
  if (file !== "index.js") {
    let routes = require(`./${file}`);
    router.use(routes.routes()).use(routes.allowedMethods());
  }
});
module.exports = router.routes();
