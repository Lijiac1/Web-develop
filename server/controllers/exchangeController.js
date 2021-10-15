const express = require('express');
const Exchange = require('../modules/exchange');
const User = require('../modules/user');
const router = express.Router();

router.post('/api/exchange',function(req,res,next){
    let exchange = new Exchange(req.body);
    exchange.save(function(err){
        if(err){return next(err);}
        res.status(201).json(exchange);
    });
    
});
module.exports = router;