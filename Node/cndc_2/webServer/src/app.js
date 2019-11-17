const express = require('express');

const app = express();


// Routes

app.get('', (req, res) => {
    res.send('Hello express');
});

app.get('/help', (req, res) => {
    res.send('help - Hello express');
});

app.get('/about', (req, res) => {
    res.send('About - Hello express');
});

app.get('/weather', (req, res) => {
    res.send('Weather - Hello express');
});

// Run server

app.listen(3000, () => {
    console.log('Server listening at port 3000');
});