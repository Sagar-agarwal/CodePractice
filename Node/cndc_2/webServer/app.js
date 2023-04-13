const express = require("express");
const hbs = require("hbs");

const app = express();

// Handelbar helpers
hbs.registerHelper("getCurrentYear", () => new Date().getFullYear());

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

// Routes

app.get("/", (req, res) => {
    res.render("home.hbs", {
        pageTitle: "Home Page",
        message: "Welcome to under construction page"
    });
});

app.get("/help", (req, res) => {
    res.render("help.hbs", {
        pageTitle: "Help Page",
        message: "Need some help!!"
    });
});

app.get("/about", (req, res) => {
    res.render("about.hbs", {
        pageTitle: "About Page"
    });
});

app.get("/weather", (req, res) => {
    res.send("Weather - Hello express");
});

app.get("/bad", (req, res) => {
    req.send({
        errorMessage: "This is a bad request"
    });
});

// Run server

app.listen(3000, () => {
    console.log("Server listening at port 3000");
});
