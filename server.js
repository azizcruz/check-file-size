// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var multer = require("multer");
var upload = multer({
dist: "uploads/"
})

// Use the middlewares with the server.
app.use(bodyParser.json());
app.use(cors());


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// Post upload file.
app.post("/upload/file", (request, response) => {

})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
