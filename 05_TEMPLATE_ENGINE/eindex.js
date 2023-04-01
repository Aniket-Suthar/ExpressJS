const express=require("express");
const path=require("path");
const port=8000;
const app= express()

const templatePath=path.join(__dirname,"/templates");
console.log(templatePath);

//Setting up the view Engine i.e ="hbs,pug,ejs"
app.set("view engine","hbs");

//Chnaging the name of View DIrectory to some Other name here, templates
app.set("views",templatePath);


//Routing template engine
app.get("/",(req,res)=>{
   
    res.render("index",{
         //adding dyanmic content
        myname:"Aniket"
    });
});

app.get("/home",(req,res)=>{
    res.send("Hello from the Express Server...");
})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});