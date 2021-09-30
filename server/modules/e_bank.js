const mongoose = require('mongoose')
const Schema = mongoose.Schema;


var e_bankSchema = new Schema({
    total_money : Number,
    total_chips : Number,
    money_in : Number,
    money_out : Number,
    chips_in : Number,
    chips_out : Number,
    user_id : [{type: mongoose.Types.ObjectId, ref: 'user'}],
    },
    { timestamps: { createdAt: 'created_at' }
});


module.exports = mongoose.model('e_bank',e_bankSchema)


  