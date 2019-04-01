const request = require('request');
const yargs = require('yargs');

// To include your Google API access key, swap this code with your key
var someObj = require('./../../../someObj.js');
var key = '&key=' + someObj.keys.mapKey + '';

// yargs options
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help().alias('help', 'h')
    .argv;

    var address = encodeURIComponent(argv.a);
    console.log('address: ' + address);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}${key}`,
    json: true
}, (error, response, body) => {
    console.log(body);
    var formattedAddress = body.results[0].formatted_address;
    var location = body.results[0].geometry.location;

    console.log(`Address: ${formattedAddress}`);
    console.log('location> Lat: ', location.lat,  ' Lon: ', location.lng);
    //console.log(JSON.stringify(location, undefined, 4));
});
