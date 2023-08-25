import express from "express";
import bodyParser from "body-parser";
const app=express();
const port=3000;








app.listen(port,(req,res)=>{
  console.log(`server is running at port ${port}`);
})