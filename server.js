var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("client/build"));

//API ROUTES


//DATABASE


app.listen(PORT, function(){
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT
      );
})