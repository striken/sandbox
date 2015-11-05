
var express = require('express'); // charge ExpressJS

var app = express();


// on gere les autres routes en informant le visiteur
app.use(express.static('app'));

app.get('/hello', function(req, res) {
	res.json({content: 'hello world'});
});

app.get('/now', function(req, res) {
	res.json({now: new Date()});
});

app.listen(80);
