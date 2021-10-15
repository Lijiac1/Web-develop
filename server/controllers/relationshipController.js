const express = require('express');
const e_bank = require('../modules/e_bank');
const router = express.Router();
const E_bank = require('../modules/e_bank');
const User = require('../modules/user');



//Create a users with a given  e_bank_id
router.post('/api/e_banks/:e_bank_id/users',function(req,res,next){
    let e_bank_id = req.params.e_bank_id;
    let user = new User(req.body);
    E_bank.findById(e_bank_id, function(err, e_bank){
        if(err){return next(err);}
        
        e_bank.user_id.push(user._id);
        e_bank.save()
    });
    user.save(function(err){
        if(err){return next(err);}
        res.status(201).json(user);
    });

});
//return all users under a specific e_bank
router.get('/api/e_banks/:e_bank_id/users',function(req,res,next){
    let e_bank_id = req.params.e_bank_id;
    E_bank.findById(e_bank_id, function(err, e_bank){
        if(err){return next(err);}
        res.status(200).json(e_bank.user_id);
    });

});

router.get('/api/e_banks/:e_bank_id/users/:user_id',function(req,res,next){
    let e_bank_id = req.params.e_bank_id;
    let user_id = req.params.user_id;
    E_bank.findById(e_bank_id, function(err, e_bank){
        if(err){return next(err);}
        for (let i=0, l=e_bank.user_id.length; i<l; i++){
            if(user_id == e_bank.user_id[i]){
                User.findById(user_id, function(err, user){
                    res.status(200).json(user)
                });
            }
        }
    });
});


router.delete('/api/e_banks/:e_bank_id/users/:user_id',function(req,res,next){
    let user_id = req.params.user_id;
    User.findByIdAndDelete(user_id, function(err){
        if (err){
            res.status(404).send(err);
        }else{
            res.status(204).send("Deleted!");
        }
    });
});

module.exports = router;