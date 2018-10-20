const request = require('request');

var someObj = require('./../../../someObj.js');

var key = '&key=' + someObj.keys.mapKey + '';

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA' + key,
    json: true
}, (error, response, body) => {
    console.log(body);
});