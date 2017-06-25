var express = require('express')
var path = require('path');
var request = require('request');
var _ = require('lodash');
var app = express();
var apiKey = 'jnfiutPOiK2Rh9FW8uRupa49YYXZ2wfl4j4vwL7S';

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3500);
