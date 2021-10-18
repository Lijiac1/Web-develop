const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var userSchema = new Schema({
    username : String,
    password : String,
    name : String,
    chips : Number,
    money : Number,
    e_bank_id : {type: mongoose.Types.ObjectId, ref: 'e_bank'},
}
);

module.exports = mongoose.model('user',userSchema)
