const{model,Schema} = require("mongoose")

let activityScheme =Schema({
     __v :    {type:Number,select:false},
     topImg:{type:String},
     title:{type:String},
     type:{type:Schema.Types.ObjectId,ref:"kinds",required:true},
     desc:{type:String},
     // address:{type:[{ addressId:Schema.Types.ObjectId,ref:'kinds'}],select:true},
     // address:{type:[{type:Schema.Types.ObjectId,ref:'addresses'}],select:true},
     activityStartTime:{type:String,default:''},
     activityEndTime:{type:String,default:''},
     applyStartTime:{type:String,default:''},
     applyEndTime:{type:String,default:''},
     map: {type: Boolean, default: false},
     auditStatus: { type: Number}, // 0 审核中 1 审核通过 -1 审核未通过
     address:{type:String,require: true},
     longitude:{type:String,require: true},
     latitude:{type:String,require: true},
     activityImgs: { type: Array},
     creator:{type:Schema.Types.ObjectId,ref:'users',required:true},
     applyUser: { type: Array}

})

let activityModel = model("activity",activityScheme)
module.exports = activityModel


