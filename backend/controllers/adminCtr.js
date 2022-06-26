const path = require("path")
const admin = require("../../db/model/adminModel")
const {secret} = require("../config/config")
const jsonWebToken = require("jsonwebtoken")
const fs = require('fs')
const XLSX = require('xlsx')
const send = require("koa-send")
class AdminCtr{

  async getAuth(ctx){
    const btnlist = ['add-goods',"export-link"]
    ctx.body={code:0,btnlist,msg:'查询ok'}
   }
  async find(ctx){
   let adminList = await admin.find()
   ctx.body={code:0,adminList,msg:'查询ok'}
  }
  findById(ctx){
    ctx.body ="获取某一个管理"
  }
  async create(ctx){
    let {userName,passWord} = ctx.request.body 
    let result = await admin.insertMany({userName,passWord})
    if(!result){ ctx.throw(-1,'管理员添加失败')}
    ctx.body ={code:0,msg:'管理员添加成功'}
  }
  async update(ctx){
    let id= ctx.params.id
    let {userName,passWord} = ctx.request.body 
    let result = await admin.findByIdAndUpdate(id,{userName,passWord} )
    if(!result){ ctx.throw(404,'管理员修改失败')}
    ctx.body={code:0,msg:'管理员修改成功'}
  }
  async delete(ctx){
    let id= ctx.params.id
    let result =await  admin.findByIdAndDelete(id)
    if(!result){ ctx.throw(404,'管理员删除失败')}
    ctx.body={code:0,msg:'管理员删除成功'}
  }
  async login(ctx){
    let {userName,passWord} = ctx.request.body 
    let userInfo =await  admin.findOne({userName,passWord})
    console.log(typeof userInfo)
    if(!userInfo){ ctx.throw(404,'登录失败')}
    let token = jsonWebToken.sign({userInfo},secret,{expiresIn:"1d"})
    ctx.body={code:0,msg:'登录成功',token}
  }
  // 导出excel 文件连接附件
  async exportExcel(ctx){
    //  根据用户的参数读取数据库 
    //  将数据库里的内容转化为excel
    //  需要多次下载 就要在服务器上生成一个文件
    //  不需要下载直接转化为二进制流
    let adminList = await admin.find()
    console.log(adminList)
      let arr =[
        ['id','角色','用户名'],
      ]
      adminList.map(item => {
        arr.push([`${item._id}`,item.leavel,item.userName])
        return item;
      })
      let  sheet =XLSX.utils.aoa_to_sheet(arr)
      let  book = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(book,sheet)
      XLSX.writeFile(book,path.join(__dirname,"../excel/hehe.xlsx"))

      const url = path.join(__dirname,'../excel/hehe.xlsx');
      //  ctx.attachment('/excel/hehe.xlsx');
      await send(ctx, 'hehe.xlsx',{ root: path.join(__dirname,'../excel') });
  }

  async exportExcelData (ctx) {
    // 读取数据库数据
    let adminList = await admin.find()
    // 产生数据表
    let arr =[
      ['id','角色','用户名'],
    ]
    adminList.map(item => {
      arr.push([`${item._id}`,item.leavel,item.userName])
      return item;
    })
    let  sheet =XLSX.utils.aoa_to_sheet(arr)
    let  book = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(book,sheet)
    XLSX.writeFile(book,path.join(__dirname,"../excel/hehe.xlsx"))
    // 读取文件变成二进制数据流
    const result = fs.readFileSync(path.join(__dirname,'../excel/hehe.xlsx'))
    let data = new Buffer(result,'binary');
    ctx.set('Content-Type', 'application/octet-stream');
	  ctx.set("Content-Disposition", "attachment; filename=" + "gp29.xlsx");
	  ctx.body = data;
  }
  
}

module.exports =new AdminCtr()
