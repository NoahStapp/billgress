var express = require('express')
var path = require('path');
var request = require('request');
var _ = require('lodash');
var app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3500);
