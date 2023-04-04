const path=require("path");
const express=require("express");
const app=express();
const port=5000;
const requests=require("requests");
//Creating a path for the HTML file using PATH module
const staticPath=path.join(__dirname,'../public');

//Using the STATIC middleware
app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=6e702b39fba85c701de526252e2832ec`)
    .on('data', (chunk) => {
        //converting JSON to OBJECT
        const objData = JSON.parse(chunk);

        //creating Array of OBJECT
        const arrData =[objData];

        //Getting the temp
        console.log(`City name is :${arrData[0].name} and temp is : ${(arrData[0].main.temp-273.13).toFixed(2)}`);

        
        res.write(arrData[0].name);
       
    })
    .on('end', (err) => {
        if (err) return console.log('connection closed due to errors', err);
        res.end();
        console.log('end');
    });
})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});