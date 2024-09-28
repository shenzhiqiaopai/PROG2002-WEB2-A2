var express = require('express');
var app = express();
var fundraisersAPI = require("./API-controller/API-controller");
app.use("/api/fundraisers", fundraisersAPI);
app.listen(3060);
console.log("Server up and running on port 3060");