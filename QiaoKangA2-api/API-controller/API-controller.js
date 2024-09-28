/**
 * 
 * 
 * 
 */

var databaseCON = require("../database");
var connection = databaseCON.getconnection();
connection.connect();
var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    connection.query("SELECT * FROM fundraiser", (err, records, fields) => {
        if (err) {
            console.error("Failed to retrieve data from the 'fundraiser' table: ");//Return error
        } else {
            res.send(records); //Return all records in the funder table
        }
    });
});

module.exports = router;//Export the router so it can be used in other modules.