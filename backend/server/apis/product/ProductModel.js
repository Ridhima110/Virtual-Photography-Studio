const mongoose=require("mongoose")
let ProductSchema=mongoose.Schema({
    name:{type:String,default:"No-Name"},
    description:{type:String,default:""},
    image:{type:String,default:"No Image"},
    price:{type:Number,default:0},
    status:{type:Boolean,default:true},
    stock:{type:Number,default:0},
    createdAt:{type:Date,default:Date.now}
})
module.exports=mongoose.model("Products",ProductSchema);