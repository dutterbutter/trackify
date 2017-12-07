const express = require('express');
const cors = require('cors');
const axios = require('axios');

app = express();
PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.get('/summary', (req, res) => {

    let result = {}
    let url = "https://api.coinmarketcap.com/v1/ticker/?limit=10"
    
    return axios.get(url)

    .then(response => {
        result.coinMkt = response.data;
        console.log(result.coinMkt);
        res.send(result);
    })
    .catch(err => {
        console.log(error);
    })
})














app.listen(PORT, _ => {
    console.log(`Express listening on ${PORT}, ctrl+c to kill. `)
});