const Router = require("koa-router")
const router = new Router({ prefix: "/test"})
router.get("/",(ctx) => {
  ctx.body = 'backendtest'
})
module.exports = router