const express = require('express');
const user = require('../modules/user');
const router = express.Router();


router.post('/register',function(req,res){
    let client = new user(req.body);
    client.save(function(err){
        if(err){return next(err);}
        res.status(201).json(client);
    });
    
});

router.get('/login/:id',function(req,res){
    let id = req.body.account_id;
    user.findOne({account_id : id}, function(err, client){
        if(err){return next(err);}
        if(client == null){
            return res.status(200).json({'clinet':'not registered'});
        }
        if(client.password == req.body.password){
            res.status(201).json(client);
            res.send('log in successfully');}
        
    });
    
});

router.patch('/logout/:id',function(req,res){
    let id = req.params.id;
    user.findById(id, function(err, client){
        if(err){return next(err);}
        client.money = req.body.money;
        client.chips = req.body.chips;
        client.save();
        res.status(201).json(client);
    });

    
    
});

router.patch('/exchange/:id',function(req,res){
    let id = req.params.id;
    user.findById(id, function(err, client){
        if(err){return next(err);}
        client.money = req.body.money;
        client.chips = req.body.chips;
        client.save();
        res.status(201).json(client);
    }); 
    
});

router.delete('/', function(req, res){
    res.status(200).send('Delete successfully');
});


module.exports = router




