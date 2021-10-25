const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var userSchema = new Schema({
    username : {type:String,unique:true},
    password : String,
    name : String,
    chips : Number,
    money : Number,
    e_bank_id : {type: mongoose.Types.ObjectId, ref: 'e_bank'},
}
);
const errlog = function(err,res,next){
    if(err.code == 11000 ){return next(new Error("username can not be same"))}
    else{return next()}
}
userSchema.post("save",errlog)

module.exports = mongoose.model('user',userSchema)
