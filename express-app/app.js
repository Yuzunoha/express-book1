var http = require('http');
var morgan = require('morgan');
var express = require('express');

var app = express();

app.use(morgan('combined'));

app.get('/', (req, res) => {
  return res.send('こんにちは!');
});

var server = http.createServer(app);
server.listen(80);
