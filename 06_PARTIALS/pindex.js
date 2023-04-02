const express = require("express");
const port = 3000;
const hbs = require("hbs");
const path = require("path");
const app = express();


//Getting the partials folder path
const partialPath = path.join(__dirname, "/partials");
// console.log(partialPath);

app.set("view engine", "hbs");

//Adding partials folder
hbs.registerPartials(partialPath);

app.get("/about", (req, res) => {
    res.render("about");
})

//Adding 404 Error page
app.get('/about/*', (req, res) => {
    res.render("404", {
        errorcomment: 'OOPS! THIS ABOUT US PAGE IS NOT FOUND ,ERROR 404'
    });
});

//Adding 404 Error page
app.get('*', (req, res) => {
    res.render("404", {
        errorcomment: 'OOPS! PAGE IS NOT FOUND ,ERROR 404'
    });
});


app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})