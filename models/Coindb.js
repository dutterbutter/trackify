const mongoose = require('mongoose');
    Schema = mongoose.Schema;

const cryptoSchema = new Schema({
 
    coinId : {type: String},
    uname  : {type: String},
    pword  : {type: String}    
  
})

const CoinModel = mongoose.model("Coindb", cryptoSchema);

module.exports = CoinModel;