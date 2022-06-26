const express = require("express"); //express module
const bodyParser = require("body-parser");
const request = require("request");
const https= require("https");
const app = express();

app.use(express.static("public")); //allow to add css file to our html
app.use(bodyParser.urlencoded({extended:true})); //event accure from the html

  /*****************get request******************/

app.get("/", function(req,res){
  res.sendFile(__dirname +"/signup.html");
});

/*************post request********************/

app.post("/", function(req, res){

/************variable entered in html***********/

  const firstName = req.body.firstName;
  const lastName =  req.body.lastName;
  const email = req.body.email;

/*************mailchap dada ***********/

    const data = {
      members : [
        {
          email_address : email,
          status : "subscribed",
          merge_fields : {
            FNAME : firstName,
            LNAME : lastName
          }

        }
      ]
    };

    const jsonDate = JSON.stringify(data);

    const url = "https://us18.api.mailchimp.com/3.0/lists/08ff0158f3"; //mailchap url

    const option = {
      method : "POST",
      auth: "sachida:de57e47c4f82d7b9994d735b7713f965-us18" //api key
    }

/*****************success and failure page************/

      const request =  https.request(url, option, function(response){
        if(response.statusCode === 200){
          res.sendFile(__dirname +"/success.html");
        }else{
          res.sendFile(__dirname +"/failure.html");
        }

        response.on("data", function(data){
          console.log(JSON.parse(data));
        })
    })

/********************redirect from failure page to main page************/

    app.post("/failure", function(req, res){
      res.redirect("/");
    })

    request.write(jsonDate);
    request.end();

});

// list id
// 08ff0158f3

// api key
// de57e47c4f82d7b9994d735b7713f965-us18
/***************server port established*********/

app.listen(process.env.PORT || 3000, function(){
  console.log("server starteda at port 3000");
});
