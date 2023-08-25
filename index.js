import express from "express";
import bodyParser from "body-parser";
const app=express();
const port=3000;

app.get("/",(req,res)=>{
    res.send('<h1>hi</h1>');
})
app.get("/login",(req,res)=>{
    console.log("hiii");
    res.send('<h1>Hello</h1>');
})
app.get("/register",(req,res)=>{
    res.send('<h1>Hello</h1>');
})
app.listen(port,(req,res)=>{
  console.log(`server is running at port ${port}`);
})