const path=require("path");
const express=require("express");
const app=express();
const port=5000;

//Creating a path for the HTML file using PATH module
const staticPath=path.join(__dirname,'../public');


//Using the STATIC middleware
app.use(express.static(staticPath));


app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})