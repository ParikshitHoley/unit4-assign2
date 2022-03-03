const { json } = require("body-parser");
const express = require("express");
const app =express();
const books=require("./books.json")
app.use(express.json());


app.get("/home",function(req,res)
{
    console.log("hellow");
    res.send("hellow")
})

app.listen(5000,()=>{
    console.log("lisning on port 5000")
})

app.get("/books",(req,res)=>{
   res.send({
       mybooks:books
   })
     
})