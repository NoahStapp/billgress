var express = require('express')
var path = require('path');
var request = require('request');
var _ = require('lodash');
const fs = require("fs");
const sqlite = require("sql.js");
var app = express();
var port = process.env.PORT || 3001;
var apiKey = 'jnfiutPOiK2Rh9FW8uRupa49YYXZ2wfl4j4vwL7S';

app.get('/api/recent', function (req, res) {
    var info = [];
    var options = {
        url: 'https://api.propublica.org/congress/v1/115/house/bills/introduced.json',
        headers: {
            'X-API-Key': apiKey
        },
    };
    request.get(options, function(error, response, data) {
        console.log('data:----');
        data = JSON.parse(data)
        console.log(data);
        var results = _.get(data, 'results');
        console.log('results:------');
        console.log(results);
        var bills = _.map(results, 'bills');
        console.log('bills:-----');
        console.log(bills);
        var flatBills = _.flatten(bills);
        var filteredBills = _.map(flatBills, function(bill) {
            var obj = _.pick(bill, ['title', 'number', 'introduced_date', 'primary_subject', 'bill_id', 'latest_major_action']);
            return obj;
        });
        console.log('filteredBills:-----');
        console.log(filteredBills);
        info = filteredBills;
        res.json(filteredBills)
    });
});

var server = app.listen(port, function () {
    console.log('Billgress running on port 3001!')
});
