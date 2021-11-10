var http = require('http');
var morgan = require('morgan');
var express = require('express');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs');

app.use(morgan('combined'));

app.get('/', (req, res) => {
  return res.render('index', { title: 'こんにちは世界!ejs' });
});

var server = http.createServer(app);
server.listen(80);
