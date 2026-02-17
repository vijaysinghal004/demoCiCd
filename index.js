const express=require("express");
const sum = require("./sum");
const app=express();
const port=8080;

app.get("/home",(req,res)=>{
    res.json({
        msg:"I am root"   
    })
})
app.get("/getSum/:a/:b",async(req,res)=>{
const {a,b}=req.params;
res.json({
ans:sum(parseInt(a),parseInt(b))
})
})
app.listen(port,()=>{
    console.log("server is listing at port no 8080");
})