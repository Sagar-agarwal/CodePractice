const path = require("path");
const express = require("express");
const hbs = require("hbs");

const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

const port = process.env.PORT || 3000;

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
    res.render("index", {
        title: "Weather",
        name: "Andrew Mead"
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About Me",
        name: "Andrew Mead"
    });
});

app.get("/help", (req, res) => {
    res.render("help", {
        helpText: "This is some helpful text.",
        title: "Help",
        name: "Andrew Mead"
    });
});

app.get("/weather", (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "You must provide Address"
        });
    }

    geocode(req.query.address, (err, answer) => {
        if (err) {
            return res.send({
                error: err
            });
        }

        forecast(answer.latitude, answer.longitude, (err, forecastData) => {
            if (err) {
                return res.send(err);
            }
            res.send({
                Location: answer.location,
                forecast: forecastData
            });
        });
    });
});

app.get("/help/*", (req, res) => {
    res.render("404", {
        title: "404",
        name: "Andrew Mead",
        errorMessage: "Help article not found."
    });
});

app.get("*", (req, res) => {
    res.render("404", {
        title: "404",
        name: "Andrew Mead",
        errorMessage: "Page not found."
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}.`);
});
