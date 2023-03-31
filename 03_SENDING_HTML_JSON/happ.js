const express=require("express");
const app=express();
const port=9000;

app.get('/',(req,res)=>{
    //Sending HTML element to webpage
    res.write("<h1>This is the home page</h1>");
    res.write("<h1>This is the NEw home page</h1>");
    res.send();
});

app.get('/about',(req,res)=>{
    res.status(200).send("This is about Us Page");
});

app.get('/temp',(req,res)=>{
    //Passing object to webpage 
    //Inbuilt Express will convert into JSON
    
    //Array of object

    //We can also use "res.json" in place of "res.send"

    // You can send the JSON response by using res.json() method. It accepts an object and converts it into JSON before sending it as a response.

    res.send([{
        name:"Aniket",
        age:20
    },
    {
        name:"Prayag",
        age:19
    }]);
});


app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
}); 