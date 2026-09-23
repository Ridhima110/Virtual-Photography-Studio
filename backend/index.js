const express=require("express")
const app=express()
const port=5002
const db=require("./server/config/db")
const router=require("./server/routes/ApiRoutes")
app.use(express.json())
app.use(express.urlencoded())
app.get("/",(req,res)=>{
    res.send("backend is running")
})
app.use("/api",router)
app.listen(port,(err)=>{
    if(err){
        console.log("there is an error",err);
    }else{
        console.log("server is running");
    }

    })