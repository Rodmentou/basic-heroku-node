var express = require('express'),
	app = express();


app.port = process.env.PORT || 5000;

app.get('/', function (req, res) {
	res.send("Hello, Heroku!");
});


app.listen(app.port, function (){
	console.log('App running at ' + app.port + '.');
});