const express=require("express");
const { template } = require("handlebars");
const app=express();
const port= 3000;
const path=require("path");
const hbs=require("hbs");


//Public Folder PAth
const staticPath=path.join(__dirname,"../public")
const templatePath=path.join(__dirname,"../templates/views")
const partialPath=path.join(__dirname,"../templates/partials")

// console.log(staticPath);
app.set('view engine','hbs');

app.set("views",templatePath)

//Adding the static HTML pages
app.use(express.static(staticPath))

//Adding Partials
hbs.registerPartials(partialPath)



//ROuting
app.get("",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
   res.render('about');
});

app.get("/weather",(req,res)=>{
    res.render("weather")
});

app.get("*",(req,res)=>{
    res.render("404error",{
        errormsg:'Oops! Sorry the Page you are Looking For DNE...'
    })
});

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
});