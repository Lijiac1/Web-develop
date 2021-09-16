const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var relationship = new Schema({
    e_bank_id : Schema.Types.ObjectId,
    user_id : Schema.Types.ObjectId,
});

module.exports = mongoose.model('relationship', relationship);