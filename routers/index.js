const fs = require('fs')
const path = require("path")
module.exports= (app)=>{
let dirs = fs.readdirSync(path.join(__dirname, "./"));
  dirs.forEach(file => {
    fs.stat(path.join(__dirname,file),(err,state) => {
      if(state.isDirectory() && file === "backend") {
        let router = require(`./${file}`)
        app.use(router)
      }
    })
  })
}