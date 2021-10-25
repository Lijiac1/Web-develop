const express = require('express');
const router = express.Router();
const E_bank = require('../modules/e_bank');
const User = require('../modules/user');



//Create a users with a given  e_bank_id
router.post('/v1/e_banks/:e_bank_id/users',function(req,res,next){
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
router.get('/v1/e_banks/:e_bank_id/users',function(req,res,next){
    let e_bank_id = req.params.e_bank_id;
    E_bank.findById(e_bank_id, function(err, e_bank){
        if(err){return next(err);}
        res.status(200).json(e_bank.user_id);
    });

});

router.get('/v1/e_banks/:e_bank_id/users/name',function(req,res,next){
    let e_bank_id = req.params.e_bank_id;
    E_bank.findOne({'_id':e_bank_id}).populate('user_id').exec(function(err, e_bank){
        if(err){return next(err);}
        res.status(200).json(e_bank.user_id);
    });

});

router.get('/v1/e_banks/:e_bank_id/users/:user_id',function(req,res,next){
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


router.delete('/v1/e_banks/:e_bank_id/users/:user_id',function(req,res,next){
    let user_id = req.params.user_id;
    let e_bank_id = req.params.e_bank_id
    E_bank.findById(e_bank_id, function(err, e_bank){
        if(err || e_bank == null){
            return next(err);}
        e_bank.user_id = e_bank.user_id.filter(id=>id!=user_id)
        e_bank.save()
        User.findByIdAndDelete(user_id, function(err,user){
            if (err){
                return next(err);
            }else{
                if(user != null){res.status(204).json(e_bank);}
                else{
                    return next(err);}
            }
        });
    })
    
});

module.exports = router;