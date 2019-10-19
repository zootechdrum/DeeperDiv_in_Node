const path = require('path');
const express = require('express');
const hbs = require('hbs')



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

app.get('', (req, res) => {
    res.render('index' , {
        title:'Your moms house',
        name: 'Tom Seguro'
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
        name:'Cesar Gomez'
    })
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

//Renders 404 page.
app.get('*', () => {
    res.send('My 404 page')
})


app.listen(3000, () => {
        console.log("Server is up and running")
    });