const Router = require("koa-router");
const authToken = require("../middlewera/autoToken")
const router = new Router({prefix:'/html'})
const {find,
  create,
  findById,
  } = require('../controllers/htmlCtr')
  router.post('/',authToken,create) // 添加html信息
  router.get('/',authToken,find)    // 查询列表   
  router.get('/:id',findById)  // 根据id查询网页
  // router.put('/:id',authToken,update) //根据id实现更改

module.exports = router