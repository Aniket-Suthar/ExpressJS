
const express = require("express");
const hbs = require("hbs");
const port = 4000;
const app = express();
const path = require("path");

const partialPath = path.join(__dirname, "/partials");
// console.log(partialPath);

const staticPath=path.join(__dirname,"/public");


app.use(express.static(staticPath));

app.set("view engine", "hbs");

hbs.registerPartials(partialPath);

app.get("/home",(req,res)=>{
    res.render("algo")
});

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
}); 