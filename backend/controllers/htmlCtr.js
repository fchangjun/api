const html = require("../../db/model/htmlModel");
class HtmlCtr {
  // 查询列表
  async find(ctx) {
    let list = await html.find();
    ctx.body = { code: 0, list, msg: "查询ok" };
  }
  // 添加
  async create(ctx) {
    let { code, title } = ctx.request.body;
    let result = await html.insertMany({ code, title });
    if (!result) {
      ctx.throw(404, "模板添加失败");
    }
    ctx.body = { code: 0, msg: "模板添加成功" };
  }

  // 查询列表根据id
  async findById(ctx) {
    let id = ctx.params.id;
    let list = await html.find({ _id: id });
    ctx.body = list[0]['code'];
  }
}
module.exports = new HtmlCtr();
