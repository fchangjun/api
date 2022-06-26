const Router = require("koa-router");
const authToken = require("../../middlewera/autoToken")
const authPermission = require("../../middlewera/authPermissions.js")
const router = new Router({prefix:'/admin'})
const {find,
  login,
  create,
  update,
  exportExcel,
  exportExcelData,
  getAuth,
  delete:del} = require('../../controllers/backend/adminCtr')
router.get("/getAuth",getAuth)
router.get('/export',exportExcel)
router.post('/export',authToken,authPermission,exportExcelData)

router.get('/',authToken,authPermission,find)
router.post('/',create)
router.del('/:id',authToken,authPermission,del)
router.put('/:id',authToken,authPermission,update)

router.post('/login',login)
module.exports = router