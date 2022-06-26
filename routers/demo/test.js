const Router = require("koa-router")
const router = new Router({ prefix: "/test"})
router.get("/",(ctx) => {
  ctx.body = 'demo test'
})
module.exports = router