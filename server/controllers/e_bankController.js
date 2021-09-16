const express = require('express');
const e_bank = require('../modules/e_bank');
const router = express.Router();




let ebank = new e_bank({
    total_money : 500000,
    total_chips : 500000,
    money_in : 0,
    money_out : 0,
    chips_in : 0,
    chips_out : 0
});

module.exports = ebank.save();

router.get('',function(req,res){
    
})

router.patch('/exchange/',function(req,res){
    let ebank = new e_bank(req.body);
    ebank.save(function(err){
        if(err){return next(err);}
        res.status(201);
    });
});


module.exports = router

