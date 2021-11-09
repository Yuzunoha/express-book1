var http = require('http');
var express = require('express');

var app = express();

app.get('/', (req, res) => {
  return res.send('こんにちは');
});

var server = http.createServer(app);

server.listen(80);
