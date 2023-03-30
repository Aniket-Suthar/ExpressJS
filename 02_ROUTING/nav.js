const express =require("express");
const app=express();
const port =8000;

app.get('/',(req,res)=>{
    res.send("This is the home page");
});

app.get('/about',(req,res)=>{
    res.status(200).send("This is about Us Page");
});

app.get('/contact',(req,res)=>{
    res.status(200).send("THis is Contact us page");
});

 app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
 })