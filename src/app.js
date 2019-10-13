const path = require('path');
const express = require('express');



const app = express();

const publicDirectoryPath = path.join(__dirname, '../public')
console.log(__dirname);

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.send(publicDirectoryPath);
})

app.get('/help', (req, res) => {
    res.sendFile(publicDirectoryPath+'/help.html');
})

app.get('/about', (req, res) => {
    res.sendFile(publicDirectoryPath+'/aboutMe.html');
})

app.get('/weather', (req, res) => {
    //Sends back a json object when weather is visited.
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