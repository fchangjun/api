const KoaRouter = require("koa-router")
const authToken = require("../middlewera/autoToken")
const authPermission = require("../middlewera/authPermissions.js")
const router = new KoaRouter({prefix:"/activity"})
const {find,findOneById,findByKind, create, findByCreator,apply,findByApply,findApplyById} = require('../controllers/activityCtr.js')
router.post("/",authToken,create)
// 获取用户创建的活动
router.get("/creator", authToken, findByCreator)
// 获取用户参加的活动
router.get("/apply", authToken, findByApply)
// 获取报名活动用户列表
router.get("/:id/apply", authToken, findApplyById)
// 活动报名
router.post("/apply", authToken, apply)
router.get('/',find)
router.get('/:id',findOneById)
router.get('/:kind/kind',findByKind)
module.exports = router