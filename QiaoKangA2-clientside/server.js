/**
 * This is the front-end server
 */
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// to parse URL-encoded & JSON data 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// to serve static files from the 'webPage' directory
app.use(express.static(path.join(__dirname, 'webPage')));

// route to serve Home.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'webPage', 'Home.html'));
});

// route to serve Search Fundraisers page
app.get("/search", (req, res) => {
    res.sendFile(path.join(__dirname, 'webPage', 'SearchFundraisers.html'));
  });

  // route to serve Fundraisers page
app.get("/fundraiser", (req, res) => {
    res.sendFile(path.join(__dirname, 'webPage', 'Fundraisers.html'));
  });
  

//The port is 8080
app.listen(8080, () => {
  console.log("Server up and running on port 8080");
});
