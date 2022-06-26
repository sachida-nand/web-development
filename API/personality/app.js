const express = require("express");
const bodyParser = require("body-parser");
const https  = require("https");
const alert = require("alert-node");
const app = express();
app.set('view engine', 'ejs');

var pName = "";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  const url = "https://joeschmoe.io/api/v1/";

  https.get(url, function(response){
    console.log(response.statusCode);
   res.render("per.ejs", {imageAp : url});
    // response.on("data", function(data){
    //   // res.write();
    //
    // })
  })
});

app.post("/",function(req, res){
           const pName = req.body.pName;
          res.redirect("/");
});






app.listen(3000, function(){
  console.log("server started at port 3000");
});
