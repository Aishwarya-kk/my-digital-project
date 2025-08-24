const express=require("express");
const app=express();
const port=8080;
const path=require("path");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.listen(port,()=>{
    console.log(`port is ${port}`);
});

app.get("/pro",(req,res)=>{
    res.render("main.ejs");
});