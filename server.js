/**
 * New node file
 */
const express = require('express');
var bodyParser = require('body-parser');
var response = require('./response');
//console.log("response " + response.response);
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//curl -v X GET "http://localhost:8080/getResponse"
app.get("/getResponse",function(req, res) {
	res.jsonp( response.getResponse);
});

//curl -v X POST -H "Content-Type:application/json" --data '"sample":"record"' "http://localhost:8080/postResponse"
app.post("/postResponse",function(req, res) {
	console.log("post body : "+JSON.stringify(req.body));  
	res.jsonp( response.postResponse);
});
app.listen(8080, () => console.log('Example app listening on port 8080!'));
