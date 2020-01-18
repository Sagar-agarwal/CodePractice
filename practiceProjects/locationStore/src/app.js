const path = require("path");
const express = require("express");
const hbs = require("hbs");

const geoLocation = require("./utils/geolocation");

// setting PORT value
const PORT = process.env.PORT || 3000;

// Express App Setting
const app = express();
app.use(express.static(path.join(__dirname, "../public")));
app.set("views", "./src/views");

// Setting handelBar properties
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "./views/partials"));

// HandelBar Helpers
hbs.registerHelper("getCurrentYear", () => new Date().getFullYear());

// App Routes
app.get("/", (req, res) => res.render("index.hbs"));
app.get("/about", (req, res) => res.render("about.hbs"));

// App launcher
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
