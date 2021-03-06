/*
Fantasy Stock Market 
api.js
Alex Herron, Megan Goodling, Laila King
April 23rd
Added comments, reads from data from .js file instead of API call
Structures get request that can be sent to server in order to get stock information
*/


const express = require('express');
const router = express.Router();
var request = require('request');
var fs = require('fs');
var path = require('path');


var filePath = path.join(__dirname, 'stockInfo');

router.get('/stock', function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    //object containing all stock information
    fs.readFile(filePath,'utf8',function(err,data){
	if (err) throw err;
	res.json(data);
       
	
    });
    

});

module.exports = router;
