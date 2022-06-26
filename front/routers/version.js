const Router = require("koa-router");
const router = new Router({prefix:'/version'})
const {findOne, insert} = require('../controllers/versionCtr')
router.get('/',findOne)
router.get("/insert", insert)
module.exports = router