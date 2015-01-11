/**
 * New node file
 */
var express = require('express');
var response = require('./response');
//console.log("response " + response.response);
var app = express();
app.get("/getResponse",function(req, res) {
	res.jsonp( response.getResponse);
});
app.listen(8080);