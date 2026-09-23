const mongoose = require ("mongoose")
let CategorySchema=mongoose.Schema({
    name:{type:String,default :"No-Name"},
    description:{type:String, default:''},
    image:{type:String, default:'No Image'},
    status:{type:Boolean,default:true},
    createdAt:{type:Date,default:new Date}
    })


module.exports=mongoose.model("Categories",CategorySchema)