const express = require('express');
const cors = require('cors');
const axios = require('axios');
const mongoose = require('mongoose');
const Coindb = require('./models/Coindb');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


app = express();
PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());


const MONGO_CONNECTION_STRING = 'mongodb://localhost:27017/data/db'
mongoose.connect(MONGO_CONNECTION_STRING);
const connection = mongoose.connection;



app.get('/summary', (req, res) => {

    let result = {}
    let url = "https://api.coinmarketcap.com/v1/ticker/?limit=10"
    
    return axios.get(url)

    .then(response => {
        result = response.data;
        res.send(result);
    })
    .catch(err => {
        console.log(error);
    })
})

app.get('/summary/:id', (req, res) => {
    
        let id = req.params.id;
        let result = {}
        let urlBase = 'https://api.coinmarketcap.com/v1/ticker/'+id
        
        return axios.get(urlBase)
    
        .then(response => {
            result = response.data;
            res.send(result);
        })
        .catch(err => {
            console.log(error);
            res.sendStatus(500).send("We have encountered an error");
        })
    })

    app.post('/summary/:id', (req, res) => {
        Coindb({
            coinId: req.params.id
        }).save()
            .then(testId => {
                res.json(testId);
            })
            .catch(error => {
                console.log(error);
                res.sendStatus(500).send("Error mang");
            })
    })




    connection.on("open", () => {
        console.log("we are connected to mongo");
        app.listen(PORT, _ => {
            console.log(`Express listening on ${PORT}, crl+c to kill.`)
        })
    })

