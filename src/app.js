const express = require('express');

const app = express();

app.get('', (req,res) => {
    res.send("Hello express");
})

app.get('/help', (req,res) => {
    res.send("Hello Is on the way");
})

app.get('/about', (req,res) => {
    res.send("about Is on the way");
})

app.get('/weather', (req,res) => {
    res.send("wether Is on the way");
})


app.listen(3000, () => {
    console.log("Server is up and running")
});