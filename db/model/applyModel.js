const{model,Schema} = require("mongoose")
let applyScheme =Schema({
     __v :    {type:Number,select:false},
     creator:{type:Schema.Types.ObjectId,ref:'users',required:true},
     activityId:{type:Schema.Types.ObjectId,ref:'activity',required:true},
     applyUser: {type:Schema.Types.ObjectId,ref:'users',required:true},
})
let applyModel = model("apply",applyScheme)
module.exports = applyModel


