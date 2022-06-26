const version = require("../../db/model/versionModel")

class versionCtr{

  /**
   * @api {get} /version/  获取版本控制信息
   * @apiName version
   * @apiGroup version
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "code": 0,
   *       "msg":"查询ok"
   *       }
   *
   * @apiError UserNotFound The id of the User was not found.
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 404 Not Found
   *     {
   *       "error": "UserNotFound"
   *     }
   */
 async findOne(ctx){
   
    let result  = await version.findOne()
    if(!result) {
      ctx.body = { code: 500, msg:"查询失败"}
    }
    ctx.body = {
      code: 0,
      msg: "查询ok",
      data:result
    }
  }

  async insert(ctx){
   
    let result  = await version.insertMany({})
    if(!result) {
      ctx.body = { code: 500, msg:"查询失败"}
    }
    ctx.body = {
      code: 0,
      msg: "查询ok",
      data:result
    }
  }
}

module.exports =new versionCtr()
