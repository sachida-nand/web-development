const express = require("express");

const bodyParse = require("body-parser");

const app = express();
app.use(bodyParse.urlencoded({extended: true}));

app.get("/", (req, res) =>{
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", (req, res) =>{
  var weight = req.body.num1;
  var height = req.body.num2;

  var result = weight/(height*height);

  res.send("Your BMI is "+result);
});

app.listen(3000, () =>{
  console.log("server started");
});
