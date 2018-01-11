const mongoose = require('mongoose');
    Schema = mongoose.Schema;

const cryptoSchema = new Schema({
    id: {type: Number},
    coinId: {type: Array},
    userId : {type: Number},
    coinName: {type: String},
    coinPrice: {type: Number},
    coinGain : {type: Number}
})

const CoinModel = mongoose.model("Coindb", cryptoSchema);

module.exports = CoinModel;