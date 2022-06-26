const {port} = require('./config')
const path = require("path")
const koaStatic = require("koa-static")
const  Koa = require("koa")
const koaBody = require('koa-body')
const regRouter = require("./routers")
const error = require('./utils/error')
const db = require('./db/connect')
const parameter = require("koa-parameter")
const app = new Koa()



// 错误捕获
app.use(error)

// 静态文件
app.use(koaStatic('/doc',path.join(__dirname,'./doc')))
app.use(koaStatic(path.join(__dirname,'./public')))

app.use(koaBody({
  multipart:true,
  formidable:{
    keepExtensions:true,
    uploadDir:path.join(__dirname,'./public/upload')
  }
}))

// 参数校验
app.use(parameter(app))
// 路由注册
regRouter(app)


app.listen(port,()=>{
  console.log(`服务器启动,port:${port}`)
})