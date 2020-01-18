const request = require("request");
const geoToken = "pk.eyJ1Ijoic2FnYXItd2FsIiwiYSI6ImNrNWpwZnJ5cTA1YngzZW8wd2FvMmc4M2oifQ.xGYd-KvZ-QB7K8SzpSjOXw";

const geolocation = (location, callback) => {
    location = encodeURIComponent(location.trim());
    var url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${geoToken}`;
    request(url, (error, response, body) => {
        if (error) {
            callback("Geo server could not be connected", undefined);
        }
        if (body.feature.length === 0) {
            callback("Location could not be identified, try other location", undefined);
        } else {
            callback(undefined, body);
        }
    });
};

module.exports = geolocation;
