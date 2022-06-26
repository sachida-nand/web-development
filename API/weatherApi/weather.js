const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({exdended:true}));
app.get("/", function(req, res) {
         res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

        const query = req.body.cityName;
        const appId = "1829aa44ba86ede6dd16598948494616";
        const unit = "metric";
        const url =  "https://api.openweathermap.org/data/2.5/weather?q=" + query+ "&appid=" +appId+ "&units=" + unit+ "";
        https.get(url, function(response){

        console.log(response.statusCode);
        response.on("data", function(data){

        const weatherData =  JSON.parse(data);
        const temp = weatherData.main.temp;
        const weatherDescription = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const imageUrl = "http://openweathermap.org/img/wn/" +icon+ "@2x.png"
        res.write("<h1>The Weather is currentlly "+weatherDescription +"</h1>");
        res.write("<h1>The current tempreture of muzaffarpur is "+ temp+" degree celcius</h1><br>");
        res.write("<img src="+imageUrl+">");
        res.send();
      })
  })

});




      // starting the server on port
app.listen(3000, function(res){
console.log("server started");
})
