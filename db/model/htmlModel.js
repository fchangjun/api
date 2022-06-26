const mongoose = require("mongoose")
// 网页代码的数据库
let htmlScheme = mongoose.Schema({
     __v :    {type:Number,select:false},
     title:{type:String,required:true},
     code :{type:String,required:true},
})

let htmlModel = mongoose.model("htmls",htmlScheme)
module.exports = htmlModel


