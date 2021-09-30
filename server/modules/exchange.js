const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var exchangeSchema = new Schema({
    user_id : {type: mongoose.Types.ObjectId},
    volume: Number},
    {timestamps: { createdAt: 'created_at' }
});
module.exports = mongoose.model('exchange',exchangeSchema);