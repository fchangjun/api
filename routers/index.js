
const front = require('../front/routers/index')
const backend = require("../backend/routers/index")
module.exports= (app)=>{
  app.use(front)
  app.use(backend)
}