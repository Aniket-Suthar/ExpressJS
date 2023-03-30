const express=require("express");
const app=express();
//Creating server
app.get('/',(req,res)=>{
   res.send("hello I'm Running ExpressJS todayn this is a home page");
});

app.get('/about',(req,res)=>{
    res.send("hello I'm Running ExpressJS today this a About Page");
 });

//Listening to server
app.listen(3000,()=>{
    console.log("Listening to port 3000");
});