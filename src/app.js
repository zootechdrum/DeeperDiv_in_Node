const path = require('path');
const express = require('express');
const hbs = require('hbs');
var geocode = require('./utils/geocode');
var forecast = require('./utils/forecast');



const app = express();

const publicDirectoryPath = path.join(__dirname, '../public')
//so express looks at a folder called templates and not views.
const viewsPath = path.join(__dirname, '../templates/views')
//below line sets up partials
const partialsPath = path.join(__dirname, '../templates/partials')


//Setsup handlebars and location of views folder now names templates.
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Uses static files like css and images
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather Application Powered by Node',
        name: 'Cesar Gomez'
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: "This is helpful text",
        title: "Help",
        name: 'Cesar Gomez'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Cesar Gomez',
        name: 'Cesar Gomez'
    })
})

app.get('/weather', (req, res) => {
    //Sends back a json object when weather is visited.

    if (!req.query.address) {
        return res.send({
            error: "Please provide an address"
        })
    }
    
    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if (error){
            res.send({error})
        }

        forecast(latitude,longitude,(error, forecastData) => {
            if(error){
                return res.send(error)
            }

            res.send({
                forcast:forecastData,
                location: location,
                address: req.query.address
            })
        })
    })

})
    app.get('/help/*', (req, res) => {
        res.render('404', {
            error: 'I cant find what you are looking for'
        })
    });

    //Renders 404 page.
    app.get('*', () => {
        res.send('My 404 page')
    })


    app.listen(3000, () => {
        console.log("Server is up and running")
    });