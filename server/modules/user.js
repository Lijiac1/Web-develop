const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var userSchema = new Schema({
    account_id : Number,
    password : Number,
    name : String,
    chips : Number,
    money : Number,
    e_bank_id : {type: mongoose.Types.ObjectId, ref: 'e_bank'},
}
);

module.exports = mongoose.model('user',userSchema)



// var table = new Schema({
//     id : Number,
//     people : Number,

// })


// module.exports = mongoose.model('table',table)

