const request = require('request');

// To include your Google API access key, swap this code with your key
var someObj = require('./../../../someObj.js');
var key = '&key=' + someObj.keys.mapKey + '';

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA' + key,
    json: true
}, (error, response, body) => {
    var formattedAddress = body.results[0].formatted_address;
    var location = body.results[0].geometry.location;

    console.log(`Address: ${formattedAddress}`);
    console.log('location> Lat: ', location.lat,  ' Lon: ', location.lng);
    //console.log(JSON.stringify(location, undefined, 4));
});