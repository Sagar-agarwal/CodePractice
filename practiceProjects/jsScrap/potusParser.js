const rp = require("request-promise");
const $ = require("cheerio");

const potusParse = url => {
    return rp(url)
        .then(function(html) {
            return {
                name: $(".firstHeading", html).text(),
                bday: $(".bday", html).text()
            };
        })
        .catch(function(err) {
            //handle error
            console.log(err.msg);
        });
};

module.exports = potusParse;
