const mongoose=require("mongoose")

let UserSchema=mongoose.Schema({
    name:{type:String,default:"No-Name"},
    email:{type:String, default:''},
    password:{type:String, default:''},
    phone:{type:String, default:''},
    role:{type:String, default:''},
   
    status:{type:Boolean, default:true},
    createdAt:{type:Date, default:new Date}
})

module.exports= mongoose.model("Users",UserSchema)