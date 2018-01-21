const mongoose = require('mongoose');
    Schema = mongoose.Schema;

const cryptoSchema = new Schema({
 
    coinId : {type: String},
    username  : {type: String},
    password  : {type: String}    
  
})

const CoinModel = mongoose.model("Coindb", cryptoSchema);

module.exports = CoinModel;