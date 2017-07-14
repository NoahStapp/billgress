var express = require('express');
var apiKey = 'jnfiutPOiK2Rh9FW8uRupa49YYXZ2wfl4j4vwL7S';
var request = require('request');
var _ = require('lodash');
var router = express.Router();

/* GET bills listing. */
router.get('/', function(req, res, next) {
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
        info = bills;
        return info;
    });
    res.json(info);
    console.log(info);
});

module.exports = router;
