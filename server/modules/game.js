const mongoose = require('mongoose')
const Schema = mongoose.Schema;




var gameSchema = new Schema({
    name : String,
    rounds : Number,
})

module.exports = mongoose.model('game',gameSchema);
