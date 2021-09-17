const express = require('express');
const router = express.Router();
const E_bank = require('../modules/e_bank');
const User = require('../modules/user');
const Relationship = require('../modules/relationships');


//Create a users with a given id e_bank
router.post('/v1/e_banks/:e_bank_id/users',function(req,res,next){
    let e_bank_id = req.params.e_bank_id;
    let user = new User(req.body);
    let relationship = new Relationship();
    relationship.e_bank_id = e_bank_id;
    relationship.user_id = req.body._id;
    user.save(function(err){
        if(err){return next(err);}
        res.status(201).json(user);
    });
    relationship.save(function(err){
        if(err){return next(err);}
        res.status(201).json(relationship);
    });

});
//return all users under a specific e_bank
router.get('/v1/e_banks/:e_bank_id/users',function(req,res,next){
    let id = req.params.e_bank_id;
    Relationship.findById(id, function(err, relationships){
        if(err){return next(err);}
        if(relationships == null){
            return res.status(404).json({'relationship':'not found'});
        }
        let user_id = relationships.user_id;
        User.findById(user_id, function(err,users){
            if(err){return next(err);}
            res.status(200).json(users);
        });
    });

});

router.get('/v1/e_banks/:e_bank_id/users/:user_id',function(req,res,next){
    let e_bank_id = req.params.e_bank_id;
    let user_id = req.params.user_id;
    Relationship.findById(e_bank_id,function(err,relationships){
        if(err){return next(err);}
        if(relationships == null){
            return res.status(404).json({'relationship':'not found'});
        }
        if(relationships.user_id == user_id){
            User.findById(user_id,function(err,user){
                if(err){return next(err);}
                res.status(200).json(user);
            });

        }

    });
});


router.delete('/v1/e_banks/:e_bank_id/users/:user_id',function(req,res,next){
    let e_bank_id = req.params.e_bank_id;
    let user_id = req.params.user_id;
    Relationship.findById(e_bank_id,function(err,relationships){
        if(err){return next(err);}
        if(relationships == null){
            return res.status(404).json({'relationship':'not found'});
        }
        if(relationships.user_id == user_id){
            User.findByIdAndDelete(user_id,function(err,user){
                if(err){return next(err);}
                if(user == null){
                    return res.status(404).json({'user':'not found'});
                }
                res.status(204).json(user);
            });

        }

    });
});

module.exports = router;