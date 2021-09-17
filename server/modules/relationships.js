const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var relationship = new Schema({
    e_bank_id : String,
    user_id : String,
});

module.exports = mongoose.model('relationship', relationship);