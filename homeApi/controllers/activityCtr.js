const activity = require("../db/model/activityModel");
const apply = require("../db/model/applyModel");
class ActivityCtr {
  /**
   * @api {post} /activity/   创建活动
   * @apiName GetActivity
   * @apiGroup activity
   *
   * @apiParam {String} title                  活动名称
   * @apiParam {Number} type                   活动类型
   * @apiParam {String} desc                   活动描述
   * @apiParam {String} activityStartTime      活动开始时间
   * @apiParam {String} activityEndTime        活动结束时间
   * @apiParam {String} applyStartTime         报名开始时间
   * @apiParam {String} applyEndTime           报名开始时间
   * @apiParam {Boolean} map                   是否在地图展示
   * @apiParam {String} address                活动地址
   * @apiParam {String} longitude              活动中心经度
   * @apiParam {String} latitude               活动中心维度
   * @apiParam {Array} activityImgs            活动地图
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
  async create(ctx) {
    let {
      topImg,
      title,
      type,
      desc,
      activityStartTime,
      activityEndTime,
      applyStartTime,
      applyEndTime,
      map,
      address,
      longitude,
      latitude,
      activityImgs,
    } = ctx.request.body;
    const { _id } = ctx.state.userInfo;
    let result = await activity.insertMany({
      title,
      topImg,
      type,
      desc,
      activityStartTime,
      activityEndTime,
      applyStartTime,
      applyEndTime,
      map,
      address,
      longitude,
      latitude,
      activityImgs,
      creator: _id,
    });

    if (!result) {
      ctx.throw(404, "活动添加失败");
    }
    ctx.body = { code: 0, msg: "活动添加成功" };
  }
  /**
   * @api {get} /activity/   活动查询(全部)
   * @apiName GetActivity
   * @apiGroup activity
   *
   * @apiParam {Number} page            分页页码数，非必须
   * @apiParam {Number} pageSize        每页数量，非必须
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
  async find(ctx) {
    let { page = 1, pageSize = 1 } = ctx.query;
    let count = await activity.count();
    let list = await activity
      .find()
      .limit(Number(pageSize))
      .skip((page - 1) * pageSize);
    ctx.body = { code: 0, list, msg: "查询ok", count };
  }
  /**
   * @api {get} /activity/creator  获取我创建的活动
   * @apiName GetActivityByCreator
   * @apiGroup activity
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
  async findByCreator(ctx) {
    const { _id } = ctx.state.userInfo;
    // let result = await  apply.find({ applyUser: _id }).populate("activityId")
    let result = await activity
      .find({ creator: _id })
      .populate("type", "kindName -_id")
      .populate("creator", "userName -_id");
    if (!result) {
      ctx.throw(404, "活动获取失败");
    }
    ctx.body = { code: 0, msg: "ok", result };
  }

  /**
   * @api {get} /activity/apply  获取我报名的活动
   * @apiName GetActivityByApply
   * @apiGroup activity
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
  async findByApply(ctx) {
    const { _id } = ctx.state.userInfo;
    let result = await apply.find({ applyUser: _id }).populate("activityId");
    if (!result) {
      ctx.throw(404, "活动获取失败");
    }
    ctx.body = { code: 0, msg: "ok", result };
  }

  /**
   * @api {get} /activity/:id 活动id查询(id)
   * @apiName GetActivityById
   * @apiGroup activity
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
  async findOneById(ctx) {
    ctx.verifyParams({
      id: { type: "string", required: true },
    });
    let id = ctx.params.id;
    let result = await activity
      .find({ _id: id })
      .populate("type", "kindName -_id")
      // .populate("creator", "userName -_id");
    if (!result) {
      ctx.throw(404, "活动获取失败");
    }
    ctx.body = { code: 0, msg: "商品获取成功", result };
  }

  /**
   * @api {get} /activity/:id/apply 获取报名用户
   * @apiName GetApplyById
   * @apiGroup activity
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
  async findApplyById(ctx) {
    ctx.verifyParams({
      id: { type: "string", required: true },
    });
    let id = ctx.params.id;
    let result = await apply
      .find({ activityId: id },{creator:0, activityId:0, _id: 0})
      .populate("applyUser")
    if (!result) {
      ctx.throw(404, "活动获取失败");
    }
    ctx.body = { code: 0, msg: "获取成功", result };
  }
  /**
   * @api {post} /activity/apply 报名参加活动
   * @apiName applyActivity
   * @apiGroup activity
   *
   * @apiParam {Number} activityId                活动id
   * @apiParam {String} creator                   创建者id
   * @apiParam {String} token
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
  async apply(ctx) {
    let { creator, activityId } = ctx.request.body;
    const applyUser = ctx.state.userInfo._id;

    let result = await apply.insertMany({ applyUser, creator, activityId });
    if (!result) {
      ctx.throw(404, "报名失败");
    }
    ctx.body = { code: 0, msg: "报名成功", result };
  }

  /**
   * @api {get} /goods/:kind/kind 商品查询(类别)
   * @apiName GetGoodsByType
   * @apiGroup goods
   *
   * @apiParam {Number} page            分页页码数，非必须
   * @apiParam {Number} pageSize        每页数量，非必须
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
  async findByKind(ctx) {
    ctx.verifyParams({
      kind: { type: "string", required: true },
    });
    let { kind } = ctx.params;
    let { page = 1, pageSize = 2 } = ctx.query;
    let count = await goods.count({ kind });
    let list = await goods
      .find({ kind })
      .limit(Number(pageSize))
      .skip((page - 1) * pageSize)
      .populate("kind", "kindName -_id");
    ctx.body = { code: 0, list, msg: "查询ok", count };
  }
}
module.exports = new ActivityCtr();
