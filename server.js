var express = require('express')
var path = require('path');
var request = require('request');
var _ = require('lodash');
const fs = require("fs");
const sqlite = require("sql.js");
var app = express();
var port = process.env.PORT || 3001;
var apiKey = 'jnfiutPOiK2Rh9FW8uRupa49YYXZ2wfl4j4vwL7S';

app.get('/api/recent/:house/', function (req, res) {
    const house = req.params.house;
    console.log(house);
    var options = {
        url: 'https://api.propublica.org/congress/v1/115/'+house+'/bills/introduced.json',
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
        res.json(filteredBills)
    });
});

app.get('/api/bill/:id', function (req, res) {
    const billId = req.params.id;
    const idSplit = _.split(billId, '-');
    const billSlug = idSplit[0];
    console.log(billSlug);
    var options = {
        url: 'https://api.propublica.org/congress/v1/115/bills/'+billSlug+'.json',
        headers: {
            'X-API-Key': apiKey
        },
    };
    request.get(options, function(error, response, data) {
        data = JSON.parse(data);
        console.log('BILL_DATA:----');
        console.log(data);
        const results = _.get(data, 'results');
        const filteredBill = _.map(results, function(item) {
            var obj = _.pick(item, ['title', 'bill_id', 'number','sponsor', 'sponsor_party', 'congressdotgov_url', 'introduced_date', 'latest_major_action', 'summary','votes', 'primary_subject']);
            return obj
        })
        console.log(results);
        console.log(filteredBill);
        res.json(filteredBill);
    });
});

var server = app.listen(port, function () {
    console.log('Billgress running on port 3001!')
});
