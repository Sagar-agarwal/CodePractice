const rp = require("request-promise");
const $ = require("cheerio");

const pp = require("./potusParser");

const url = "https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States";
const wikiOrgUrl = "https://en.wikipedia.org/";

rp(url)
    .then(function(html) {
        //success!
        const wikiUrls = [];
        for (let i = 0; i < 45; i++) {
            wikiUrls.push($("big > a", html)[i].attribs.href);
        }
        return Promise.all(
            wikiUrls.map(function(url) {
                return pp("https://en.wikipedia.org" + url);
            })
        );
    })
    .then(function(presidents) {
        console.log(presidents);
    })
    .catch(function(err) {
        //handle error
        console.log(err);
    });
