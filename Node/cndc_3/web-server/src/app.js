const hbs = require("hbs");
const path = require("path");
const express = require("express");

const app = express();

hbs.registerPartials(path.join(__dirname, "../views/partials"));
app.set("view-engin", "hsb");

hbs.registerHelper("currentYear", () => new Date().getFullYear());

app.use(express.static(path.join(__dirname, "../public")));

app.get("", (req, res) => {
    res.render("index.hbs", {
        title: "Hello there !!"
    });
});

app.get("/help", (req, res) => {
    res.render("help.hbs", {
        title: "Need any help?"
    });
});

app.get("/about", (req, res) => {
    res.render("about.hbs", {
        title: "Want to know about us..."
    });
});

app.get("/weather", (req, res) => {
    res.render("weather.hbs", {
        title: "Its gonna be stormy"
    });
});

app.get("*", (req, res) => {
    res.render("404.hbs");
});

app.listen(3000, () => {
    console.log("Server is up on port 3000.");
});
