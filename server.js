const express = require('express');
const cors = require('cors');
const axios = require('axios');
const mongoose = require('mongoose');
const Coindb = require('./models/Coindb');
const PORT = process.env.PORT || 8080
const bcrypt = require('bcrypt')

app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(logger)

const MONGO_CONNECTION_STRING = 'mongodb://localhost:27017/data/db'
mongoose.connect(MONGO_CONNECTION_STRING);
const connection = mongoose.connection;

function logger(req, res, next) {
    console.log('Request received: ', req.originalUrl);
    next()
}


app.post('/signUp', logger, (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    bcrypt.genSalt(12, (err, salt) => {
        if (err) {
            res.status(500).json(err);
        }
        console.log('salt =', salt);

        bcrypt.hash(password, salt, (err, hashedPword) => {
            if(err) {
                return res.send(500);
            }
            Coindb({
                username: req.body.username,
                password: hashedPword
            }).save()
                .then(saved => {
                    res.send("You've Registered!");
                })
                .catch(err => {
                    console.log(error);
                    res.sendStatus(500).send("We have encountered an error")
                })
        })
    })
})
//this need work
app.post('/login'), (req, res) => {
    const username   = req.body.username,
          pwordGuess = req.body.password;
    
        let userAccount = Coindb.findOne((account) => account.username === username.username);
                if(err) 
                    throw err;       

          bcrypt.compare(pwordGuess, userAccount.password, (err, match) => {
              if (err) {
                  return res.send(500);
              }
              if (match) {
                  return res.send(200, "Worked");
              }else {
                  return res.send(401);
              };
          });
       
}



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

