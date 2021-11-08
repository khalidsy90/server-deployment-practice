'use strict'

const express = require('express');
const app = express();
require("dotenv").config();
const PORT=process.env.PORT || 3000
const ErrorHandler=require('./handlers/404')
const error=require("./handlers/500")
const stamper=require('./middleWare/stamper')

app.get("/data",stamper,(req,res)=>{
    const outPutObject={
        10:"even",
        5:"odd",
        time:req.timestamp
    }
    res.status(200).json(outPutObject)
})
app.get("/bad",(req,res,next)=>{
    next("You Made an error")
})
app.get("/",(req,res)=>{
    res.status(200).send("All thing is good")
})
app.use("*",ErrorHandler)
app.use(error)

function start(){
    app.listen(PORT,()=>{
        console.log(`Server Started on Port ${PORT}`);
    })
}

module.exports={
    app,
    start
}