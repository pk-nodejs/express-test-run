/**
 * New node file
 */
var express = require('express');
var parser = require('body-parser');
var response = require('./response');
//console.log("response " + response.response);
var app = express();
app.use(parser.json());
app.use(parser.urlencoded());

//curl -v X GET "http://localhost:8080/getResponse"
app.get("/getResponse",function(req, res) {
	res.jsonp( response.getResponse);
});

//curl -v X POST -H "Content-Type:application/json" --data '"sample":"record"' "http://localhost:8080/postResponse"
app.post("/postResponse",function(req, res) {
	console.log("post body : "+JSON.stringify(req.body));  
	res.jsonp( response.postResponse);
});
app.listen(8080);