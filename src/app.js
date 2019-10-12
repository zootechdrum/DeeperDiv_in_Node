const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send("Hello express");
})

app.get('/help', (req, res) => {
    res.send("Hello Is on the way");
})

app.get('/about', (req, res) => {
    res.send(
        "<h1>This is the about me sectionnos</h1>"
    );
})

app.get('/weather', (req, res) => {
    res.send(


        {
            name: "cesar",
            lastName: "Gomez",
            add: function (a, b) {
                return a + b;
            }
        }
    )
});


app.listen(3000, () => {
        console.log("Server is up and running")
    });